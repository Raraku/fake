import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Switcher from "./Switcher";
import * as firebase from "firebase/app";
import "firebase/messaging";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCZphUPPbPM7B3exfrwND5wI-YIeq9j_hU",
  authDomain: "elitemanga-79e49.firebaseapp.com",
  databaseURL: "https://elitemanga-79e49.firebaseio.com",
  projectId: "elitemanga-79e49",
  storageBucket: "elitemanga-79e49.appspot.com",
  messagingSenderId: "525872563894",
  appId: "1:525872563894:web:5f7f78e1ec0fc3b8004817",
  measurementId: "G-EBWFY5BZG6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
console.log("firebase initialized");

const messaging = firebase.messaging();

function subscribeUser() {
  messaging
    .requestPermission()
    .then(() => {
      messaging.usePublicVapidKey(
        "BBxtbapaUlpoXL9vOXwwJAZ-aXBY0rwhjoRfCF27hcBgLt4DplIZzIwU4UxDFEV2rgw435cVBR3E0TZVICMF9MQ"
      );
      messaging
        .getToken()
        .then((token) => {
          localStorage.setItem("pushToken", token);
          console.log(token);
        })
        .catch((err) => console.log("denied, why!!"));
    })
    .catch((err) => console.log("Denied, why!!", err));
}

function App() {
  messaging.onMessage(function(payload) {
    console.log("onMessage", payload);
  });
  useEffect(() => {
    subscribeUser();
  });
  return <Switcher />;
}

export default App;
