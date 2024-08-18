import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://00dc42345be679fbcbdd04cf3b587705@o4507793929011200.ingest.de.sentry.io/4507793931501648",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});