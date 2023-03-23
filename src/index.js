import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/shop.scss';



import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Scrolltop from './pages/Scrolltop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Scrolltop />
      <App />
    </BrowserRouter>

  </React.StrictMode>
);

