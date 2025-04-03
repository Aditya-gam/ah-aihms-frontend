import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as Sentry from '@sentry/react';

import App from './App';
import './index.css';
import { store, persistor } from './app/store';

// ✅ Sentry initialization (Updated way as of @sentry/react v7.94.0+)
Sentry.init({
  dsn: 'https://fb1215f1780f665f66eca5e72011c726@o4509086856118272.ingest.us.sentry.io/4509086863982592',
  integrations: [
    Sentry.browserTracingIntegration(), // ✅ NEW way to enable tracing
    // Sentry.replayIntegration(),         // ✅ Optional: record session replays
  ],
  // tracesSampleRate: 1.0,
  // replaysSessionSampleRate: 0.1, // Optional
  // replaysOnErrorSampleRate: 1.0, // Optional
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
