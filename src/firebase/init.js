
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9h0csouOr2n35rvqJU710AAfQxFQtRfc",
  authDomain: "real-chat-e8e84.firebaseapp.com",
  projectId: "real-chat-e8e84",
  storageBucket: "real-chat-e8e84.appspot.com",
  messagingSenderId: "38039963268",
  appId: "1:38039963268:web:0f5fe4c1ad6c8cb14164d1",
  measurementId: "G-RMN91Y3WLK"
};

const firebaseApp =  firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();


