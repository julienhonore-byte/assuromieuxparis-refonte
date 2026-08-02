export const analyticsEventNames = [
  'audit_cta_click',
  'phone_click',
  'email_click',
  'cal_click',
  'form_start',
  'audit_form_submit_error',
  'audit_form_submit_success',
] as const;

export type AnalyticsEventName = (typeof analyticsEventNames)[number];

type AnalyticsParameterName =
  | 'page_path'
  | 'page_title'
  | 'form_context'
  | 'service_interest'
  | 'conversion_intent'
  | 'cta_location'
  | 'cta_label'
  | 'link_location'
  | 'source_component'
  | 'error_type';

export type AnalyticsParameters = Partial<Record<AnalyticsParameterName, string>>;

type AnalyticsConsent = 'granted' | 'denied';
type Gtag = (command: 'event', eventName: AnalyticsEventName, parameters: AnalyticsParameters) => void;

declare global {
  interface Window {
    assuromieuxAnalyticsConsent?: AnalyticsConsent;
    assuromieuxAnalyticsInitialized?: boolean;
    gtag?: Gtag;
  }
}

const measurementId = (import.meta.env.PUBLIC_GA_MEASUREMENT_ID ?? '').trim();
const measurementIdIsValid = /^G-[A-Z0-9]+$/.test(measurementId);
const debugEnabled = import.meta.env.DEV || import.meta.env.PUBLIC_ANALYTICS_DEBUG === 'true';

const commonParameters: AnalyticsParameterName[] = ['page_path', 'page_title'];
const eventParameters: Record<AnalyticsEventName, AnalyticsParameterName[]> = {
  audit_cta_click: ['cta_location', 'cta_label', 'service_interest', 'conversion_intent', 'source_component'],
  phone_click: ['link_location', 'source_component'],
  email_click: ['link_location', 'source_component'],
  cal_click: ['link_location', 'form_context', 'source_component'],
  form_start: ['form_context', 'conversion_intent', 'source_component'],
  audit_form_submit_error: ['form_context', 'conversion_intent', 'error_type', 'source_component'],
  audit_form_submit_success: ['form_context', 'service_interest', 'conversion_intent', 'source_component'],
};

const eventNameSet = new Set<string>(analyticsEventNames);
const codeParameters = new Set<AnalyticsParameterName>([
  'form_context',
  'service_interest',
  'conversion_intent',
  'cta_location',
  'link_location',
  'source_component',
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

export const trackAnalyticsEvent = (
  eventName: AnalyticsEventName,
  parameters: AnalyticsParameters = {},
) => {
  if (typeof window === 'undefined') return;

  const safeParameters = normalizedParameters(eventName, parameters);

  if (debugEnabled) {
    console.info('[analytics:debug]', eventName, safeParameters);
  }

  const consentGranted = window.assuromieuxAnalyticsConsent === 'granted';
  if (!measurementIdIsValid || !consentGranted || typeof window.gtag !== 'function') return;

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

const linkSource = (link: HTMLAnchorElement) => link.dataset.analyticsSource ?? 'link';

const serviceInterest = (link: HTMLAnchorElement) => {
  if (link.dataset.serviceInterest) return link.dataset.serviceInterest;

  try {
    return new URL(link.href, window.location.href).searchParams.get('besoin') ?? undefined;
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
  const source = linkSource(link);

  if (href.startsWith('tel:')) {
    trackAnalyticsEvent('phone_click', { link_location: location, source_component: source });
    return;
  }

  if (href.startsWith('mailto:')) {
    trackAnalyticsEvent('email_click', { link_location: location, source_component: source });
    return;
  }

  if (isCalLink(link)) {
    trackAnalyticsEvent('cal_click', {
      link_location: location,
      form_context: link.dataset.formContext,
      source_component: source,
    });
    return;
  }

  const requestedEvent = link.dataset.analyticsEvent;
  if (requestedEvent !== 'audit_cta_click' || !eventNameSet.has(requestedEvent)) return;

  trackAnalyticsEvent('audit_cta_click', {
    cta_location: location,
    cta_label: link.dataset.analyticsLabel,
    service_interest: serviceInterest(link),
    conversion_intent: conversionIntent(link),
    source_component: source,
  });
};

export const initializeAnalytics = () => {
  if (typeof window === 'undefined' || window.assuromieuxAnalyticsInitialized) return;
  window.assuromieuxAnalyticsInitialized = true;

  if (!measurementIdIsValid && !debugEnabled) return;
  document.addEventListener('click', delegatedClick, { capture: true });
};
