import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

//Mount root react node
const root = document.getElementById('root');
ReactDOM.render((
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  ), root);



