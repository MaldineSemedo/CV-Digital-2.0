import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import Home_PT from './paginas/Home/Home-PT';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Home_PT />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
