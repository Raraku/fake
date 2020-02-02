importScripts("https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.8.0/firebase-messaging.js");

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

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  const title = "Hello World";
  const options = {
    body: payload.data.status
  };
  return self.registration.showNotification(title, options);
});
