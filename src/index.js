import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store'; 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root')); // Utiliza createRoot en lugar de ReactDOM.createRoot

root.render(
  <React.StrictMode>
    <Provider store={store}>
 
        <App />
 
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
