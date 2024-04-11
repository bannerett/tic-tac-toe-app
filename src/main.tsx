import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from '~/App.tsx';
import MuiProvider from '~/providers/MuiProvider.tsx';
import { store } from '~/state/store.ts';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then((registration) => {
    console.log('Service Worker registration', registration);
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiProvider>
        <App />
      </MuiProvider>
    </Provider>
  </React.StrictMode>
);
