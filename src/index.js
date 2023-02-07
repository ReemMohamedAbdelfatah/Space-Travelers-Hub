import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './components/redux/store';
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
=======
  <Provider store={store}>
    <App />
  </Provider>,
>>>>>>> 7bef6718d44df4b9f74eb633a609def91a9426b5
);
