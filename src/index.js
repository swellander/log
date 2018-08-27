import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';

//Mount root react node
const root = document.getElementById('root');

ReactDOM.render((
    <HashRouter> 
      <App />
    </HashRouter>
  ), root);



