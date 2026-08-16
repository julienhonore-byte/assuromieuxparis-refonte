export const analyticsMeasurementId = 'G-WWMFCQF196';

export const analyticsEventNames = [
  'generate_lead',
  'quote_start',
  'audit_start',
  'form_start',
  'form_error',
  'click_phone',
  'click_email',
  'booking_start',
] as const;

export type AnalyticsEventName = (typeof analyticsEventNames)[number];
export type AnalyticsConsent = 'granted' | 'denied';

type AnalyticsParameterName =
  | 'page_path'
  | 'page_title'
  | 'form_name'
  | 'form_location'
  | 'lead_type'
  | 'insurance_product'
  | 'intent'
  | 'cta_location'
  | 'link_location'
  | 'error_type';

export type AnalyticsParameters = Partial<Record<AnalyticsParameterName, string>>;

type ConsentRecord = {
  choice: AnalyticsConsent;
  version: 1;
  updatedAt: string;
  expiresAt: string;
};

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    assuromieuxAnalyticsConsent?: AnalyticsConsent;
    assuromieuxAnalyticsInitialized?: boolean;
    assuromieuxAnalyticsTagLoaded?: boolean;
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

const consentStorageKey = 'assuromieux:analytics-consent';
const consentLifetimeDays = 180;
const productionHosts = new Set(['assuromieuxparis.com', 'www.assuromieuxparis.com']);
const debugEnabled = import.meta.env.DEV || import.meta.env.PUBLIC_ANALYTICS_DEBUG === 'true';

const commonParameters: AnalyticsParameterName[] = ['page_path', 'page_title'];
const eventParameters: Record<AnalyticsEventName, AnalyticsParameterName[]> = {
  generate_lead: ['form_name', 'form_location', 'lead_type', 'insurance_product', 'intent'],
  quote_start: ['cta_location', 'insurance_product'],
  audit_start: ['cta_location', 'insurance_product'],
  form_start: ['form_name', 'form_location', 'intent', 'insurance_product'],
  form_error: ['form_name', 'error_type'],
  click_phone: ['link_location'],
  click_email: ['link_location'],
  booking_start: ['link_location'],
};

const codeParameters = new Set<AnalyticsParameterName>([
  'form_name',
  'form_location',
  'lead_type',
  'insurance_product',
  'intent',
  'cta_location',
  'link_location',
  'error_type',
]);

const sanitizeParameter = (name: AnalyticsParameterName, rawValue: unknown) => {
  if (typeof rawValue !== 'string') return undefined;
  const value = rawValue.trim().slice(0, 100);
  if (!value || value.includes('@')) return undefined;

  if (name === 'page_path') {
    return value.startsWith('/') && !value.includes('?') && !value.includes('#') ? value : undefined;
  }

  if (codeParameters.has(name)) {
    return /^[a-z0-9_-]+$/.test(value) ? value : undefined;
  }

  return value;
};

const normalizedParameters = (eventName: AnalyticsEventName, parameters: AnalyticsParameters) => {
  const permitted = new Set<AnalyticsParameterName>([
    ...commonParameters,
    ...eventParameters[eventName],
  ]);
  const values: AnalyticsParameters = {
    page_path: window.location.pathname,
    page_title: document.title,
    ...parameters,
  };
  const result: AnalyticsParameters = {};

  permitted.forEach((name) => {
    const value = sanitizeParameter(name, values[name]);
    if (value) result[name] = value;
  });

  return result;
};

const dispatchConsentChange = (choice: AnalyticsConsent) => {
  document.dispatchEvent(new CustomEvent('assuromieux:analytics-consent-change', { detail: { choice } }));
};

export const getStoredAnalyticsConsent = (): AnalyticsConsent | undefined => {
  if (typeof window === 'undefined') return undefined;

  try {
    const rawValue = window.localStorage.getItem(consentStorageKey);
    if (!rawValue) return undefined;
    const record = JSON.parse(rawValue) as Partial<ConsentRecord>;
    if (
      record.version !== 1
      || (record.choice !== 'granted' && record.choice !== 'denied')
      || typeof record.expiresAt !== 'string'
      || Date.parse(record.expiresAt) <= Date.now()
    ) {
      window.localStorage.removeItem(consentStorageKey);
      return undefined;
    }
    return record.choice;
  } catch {
    return undefined;
  }
};

const writeAnalyticsConsent = (choice: AnalyticsConsent) => {
  try {
    const record: ConsentRecord = {
      choice,
      version: 1,
      updatedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + consentLifetimeDays * 24 * 60 * 60 * 1000).toISOString(),
    };
    window.localStorage.setItem(consentStorageKey, JSON.stringify(record));
  } catch {
    // Le choix reste appliqué à la page courante si le stockage est indisponible.
  }
};

const clearAnalyticsCookies = () => {
  const cookieNames = document.cookie
    .split(';')
    .map((value) => value.trim().split('=')[0])
    .filter((name) => name === '_ga' || name.startsWith('_ga_'));
  const hostParts = window.location.hostname.split('.');
  const rootDomain = hostParts.length >= 2 ? `.${hostParts.slice(-2).join('.')}` : undefined;

  cookieNames.forEach((name) => {
    document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
    if (rootDomain) document.cookie = `${name}=; Max-Age=0; Path=/; Domain=${rootDomain}; SameSite=Lax`;
  });
};

const analyticsMayLoadHere = () => import.meta.env.PROD && productionHosts.has(window.location.hostname);

const ensureGtagQueue = () => {
  window.dataLayer ??= [];
  window.gtag ??= function gtag(..._args: unknown[]) {
    window.dataLayer?.push(arguments);
  };
};

const loadGoogleTag = () => {
  if (!analyticsMayLoadHere() || window.assuromieuxAnalyticsTagLoaded) return;
  window.assuromieuxAnalyticsTagLoaded = true;
  ensureGtagQueue();

  window.gtag?.('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  window.gtag?.('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  window.gtag?.('js', new Date());
  window.gtag?.('config', analyticsMeasurementId, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  window.gtag?.('event', 'page_view', {
    page_location: `${window.location.origin}${window.location.pathname}`,
    page_path: window.location.pathname,
    page_title: document.title,
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(analyticsMeasurementId)}`;
  script.dataset.assuromieuxAnalytics = 'true';
  document.head.append(script);
};

export const setAnalyticsConsent = (choice: AnalyticsConsent) => {
  if (typeof window === 'undefined') return;
  window.assuromieuxAnalyticsConsent = choice;
  writeAnalyticsConsent(choice);

  if (choice === 'granted') {
    loadGoogleTag();
  } else {
    window.gtag?.('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
    clearAnalyticsCookies();
  }

  dispatchConsentChange(choice);
};

export const trackAnalyticsEvent = (
  eventName: AnalyticsEventName,
  parameters: AnalyticsParameters = {},
) => {
  if (typeof window === 'undefined') return;
  const safeParameters = normalizedParameters(eventName, parameters);

  if (debugEnabled) console.info('[analytics:debug]', eventName, JSON.stringify(safeParameters));

  if (
    window.assuromieuxAnalyticsConsent !== 'granted'
    || !analyticsMayLoadHere()
    || typeof window.gtag !== 'function'
  ) return;

  window.gtag('event', eventName, safeParameters);
};

const linkLocation = (link: HTMLAnchorElement) => {
  if (link.dataset.analyticsLocation) return link.dataset.analyticsLocation;
  if (link.closest('.site-header-shell')) return 'header';
  if (link.closest('.home-hero, .need-hero, .page-hero, .product-hero, .sector-hero, .resource-header, .hub-hero')) return 'hero';
  if (link.closest('#contact, .contact, .contact-form-shell')) return 'contact';
  if (link.closest('.site-footer')) return 'footer';
  if (link.closest('.sticky-mobile-cta')) return 'sticky_mobile';
  if (link.closest('.page-cta')) return 'page_cta';
  return 'other';
};

const serviceInterest = (link: HTMLAnchorElement) => {
  if (link.dataset.serviceInterest) return link.dataset.serviceInterest;

  try {
    const url = new URL(link.href, window.location.href);
    return url.searchParams.get('product') ?? url.searchParams.get('besoin') ?? undefined;
  } catch {
    return undefined;
  }
};

const conversionIntent = (link: HTMLAnchorElement) => {
  if (link.dataset.conversionIntent) return link.dataset.conversionIntent;

  try {
    return new URL(link.href, window.location.href).searchParams.get('intent') ?? undefined;
  } catch {
    return undefined;
  }
};

const isCalLink = (link: HTMLAnchorElement) => {
  try {
    const hostname = new URL(link.href, window.location.href).hostname;
    return hostname === 'cal.com' || hostname.endsWith('.cal.com');
  } catch {
    return false;
  }
};

const delegatedClick = (event: MouseEvent) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const link = target.closest<HTMLAnchorElement>('a[href]');
  if (!link) return;

  const href = link.getAttribute('href') ?? '';
  const location = linkLocation(link);

  if (href.startsWith('tel:')) {
    trackAnalyticsEvent('click_phone', { link_location: location });
    return;
  }

  if (href.startsWith('mailto:')) {
    trackAnalyticsEvent('click_email', { link_location: location });
    return;
  }

  if (isCalLink(link)) {
    trackAnalyticsEvent('booking_start', { link_location: location });
    return;
  }

  if (!href.includes('#contact')) return;
  const intent = conversionIntent(link);
  if (intent !== 'quote' && intent !== 'audit') return;
  const product = serviceInterest(link) ?? 'assurances-entreprises';

  try {
    const originUrl = `${window.location.origin}${window.location.pathname}`;
    window.sessionStorage.setItem('assuromieux:form-attribution', JSON.stringify({
      ctaLabel: link.dataset.analyticsLabel ?? link.textContent?.trim().slice(0, 100) ?? '',
      originPath: window.location.pathname,
      originUrl,
      intent,
      product,
    }));
  } catch {
    // Le parcours reste fonctionnel lorsque le stockage est indisponible.
  }

  trackAnalyticsEvent(intent === 'quote' ? 'quote_start' : 'audit_start', {
    cta_location: location,
    insurance_product: product,
  });
};

export const initializeAnalytics = () => {
  if (typeof window === 'undefined' || window.assuromieuxAnalyticsInitialized) return;
  window.assuromieuxAnalyticsInitialized = true;
  const storedConsent = getStoredAnalyticsConsent();
  window.assuromieuxAnalyticsConsent = storedConsent ?? 'denied';
  if (storedConsent === 'granted') loadGoogleTag();
  document.addEventListener('click', delegatedClick, { capture: true });
};
