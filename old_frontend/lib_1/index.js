import React from 'react';
import { render } from 'react-dom';
import 'normalize.css'; // import './index.css';

import App from './App'; // import reportWebVitals from './reportWebVitals';

import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';
render(dom(DomFrag, null, dom(FirebaseContext.Provider, {
  value: {
    firebase
  }
}, dom(GlobalStyles, null), dom(App, null))), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();