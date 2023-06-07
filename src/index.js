import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './route/home/Home'
import {BrowserRouter} from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
      <CookiesProvider>
          <BrowserRouter>
              <Home />
          </BrowserRouter>
      </CookiesProvider>
  </React.StrictMode>
);


