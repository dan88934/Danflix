import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
// import './index.css';
import App from '../react_frontend/src/App';
// import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from '../react_frontend/src/global-styles';
import { firebase } from '../react_frontend/src/lib/firebase.prod';
import { FirebaseContext } from '../react_frontend/src/context/firebase'

render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
    <GlobalStyles />
    <App /> 
    </FirebaseContext.Provider>
    </>,
    document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
