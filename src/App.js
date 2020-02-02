import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Switcher from "./Switcher";
import { messaging } from "./init-fcm";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./firebase-messaging-sw.js")
    .then(function(registration) {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function(err) {
      console.log("Service worker registration failed, error:", err);
    });
}

function subscribeUser() {
  messaging
    .requestPermission()
    .then(() => {
      messaging.usePublicVapidKey(
        "BBxtbapaUlpoXL9vOXwwJAZ-aXBY0rwhjoRfCF27hcBgLt4DplIZzIwU4UxDFEV2rgw435cVBR3E0TZVICMF9MQ"
      );
      messaging.getToken();
      messaging.onMessage((payload) => {
        console.log("Message received", payload);
      });
    })
    .then((token) => {
      localStorage.setItem("pushToken", token);
      console.log(token);
    })
    .catch((err) => console.log("Denied", err));
}

function App() {
  useEffect(() => {
    subscribeUser();
  });
  return <Switcher />;
}

export default App;
