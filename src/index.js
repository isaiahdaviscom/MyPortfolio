import React from 'react';
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
reportWebVitals(console.log);