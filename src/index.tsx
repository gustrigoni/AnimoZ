import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/global.css';

import { ToastContainer } from 'react-toastify';
import { Routes } from './routes';
import { AxiosConfig } from './AxiosConfig';

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer
      theme={'dark'}
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      pauseOnFocusLoss={false}
      pauseOnHover={false}
      closeOnClick={true}
      draggable={true}
    />
    <AxiosConfig />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
