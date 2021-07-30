import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';

import { store } from './app/store';
import * as serviceWorker from './serviceWorker';

import App from './App';

import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={new QueryClient()}>
        <App/>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
serviceWorker.unregister();
