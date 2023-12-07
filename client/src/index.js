import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {

  apiKey: "AIzaSyDSS0kjF2MdzunF8EwKlfmK6r96L09vHGw",
  authDomain: "shrinker-4907e.firebaseapp.com",
  databaseURL: "https://shrinker-4907e-default-rtdb.firebaseio.com",
  projectId: "shrinker-4907e",
  storageBucket: "shrinker-4907e.appspot.com",
  messagingSenderId: "676765288910",
  appId: "1:676765288910:web:0801979c7c4489e4e4039f",
  measurementId: "G-RF4EYRV5QK"

};

initializeApp(firebaseConfig);
ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
