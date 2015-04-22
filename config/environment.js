/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'bartender',
    environment: environment,
    firebase: 'https://fiery-torch-7549.firebaseio.com/',
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    sassOptions: {
      includePaths: ['bower_components/materialize/sass']
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' 'google-analytics.com'",
      'font-src': "'self'",
      'connect-src': "'self' wss://fiery-torch-7549.firebaseio.com wss://s-dal5-nss-17.firebaseio.com",
      'img-src': "'self' *",
      'style-src': "'self' 'unsafe-inline'",
      'report-uri': "'none'"
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
