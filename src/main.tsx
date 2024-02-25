import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from '~/App.tsx';
import MuiProvider from '~/providers/MuiProvider.tsx';
import { store } from '~/state/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiProvider>
        <App />
      </MuiProvider>
    </Provider>
  </React.StrictMode>
);
