
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyB9h0csouOr2n35rvqJU710AAfQxFQtRfc",
//   authDomain: "real-chat-e8e84.firebaseapp.com",
//   projectId: "real-chat-e8e84",
//   storageBucket: "real-chat-e8e84.appspot.com",
//   messagingSenderId: "38039963268",
//   appId: "1:38039963268:web:0f5fe4c1ad6c8cb14164d1",
//   measurementId: "G-RMN91Y3WLK"
// };

const firebaseConfig = {

  apiKey: "AIzaSyB91l-hqfVG0dgnlfND2WaTCRMb1lMn-hw",

  authDomain: "chat-bbf82.firebaseapp.com",

  projectId: "chat-bbf82",

  storageBucket: "chat-bbf82.appspot.com",

  messagingSenderId: "977695447617",

  appId: "1:977695447617:web:472fda95231b7dccc004c0",

  measurementId: "G-C1KHH59YVG"

};


const firebaseApp =  firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();


