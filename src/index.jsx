import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';
import App from './App';
import { CartProvider } from './contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ReduxProvider store={store}>
    <CartProvider>
      <App />
    </CartProvider>
  </ReduxProvider>
);
