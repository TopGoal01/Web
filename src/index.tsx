import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from './routes'
import { ThemeProvider } from "styled-components";
import './assets/styles/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <ThemeProvider theme={{
            purple: '#6A53EA'
        }}>
            <Root />
        </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);