/*
 * @Descripttion: 
 * @Author: jo
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as Sentry from "@sentry/vue";

Vue.config.productionTip = false

Sentry.init({
  Vue,
  dsn: "https://235d4a39bfb5a1d353be54bfd7b4b095@o4507427803693056.ingest.us.sentry.io/4507427807428608",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
