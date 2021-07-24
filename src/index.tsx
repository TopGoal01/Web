import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from './routes'
import './assets/styles/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Root />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);