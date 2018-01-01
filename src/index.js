import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

render(app, document.querySelector('#app'));
registerServiceWorker();
