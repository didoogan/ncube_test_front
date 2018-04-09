import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import presets from './helper/presets'

axios.defaults.baseURL = presets.SERVER_URL + '/api';

axios.interceptors.request.use(request => {
  // Edit request config
  let token = localStorage.getItem('token')
  if (!token) {
    console.log('redirect to login');
    delete axios.defaults.headers.common['Authorization'];
    return request
  } else {
    return {
      ...request,
      headers: {
        ...request.headers,
        'Authorization': 'Token ' + token
      }
    }
  }}, error => {
  console.log(error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  // Edit request config
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
