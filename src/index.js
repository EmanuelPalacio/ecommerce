import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {

  apiKey: "AIzaSyAZo5W1w7CRMmGj2gjy9FMABCcFLqqTc2w",

  authDomain: "ecommerce-veterinaria.firebaseapp.com",

  projectId: "ecommerce-veterinaria",

  storageBucket: "ecommerce-veterinaria.appspot.com",

  messagingSenderId: "369377707884",

  appId: "1:369377707884:web:3097b07290ef6049391549"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
