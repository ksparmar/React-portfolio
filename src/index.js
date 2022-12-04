import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactGA from 'react-ga';

export const initGA = () =>{
  ReactGA.initialize('UA-250947973-1');
}

export const GApageView = (page) => {   
  ReactGA.pageview(page);   
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
