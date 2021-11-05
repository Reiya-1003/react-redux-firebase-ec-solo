import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyBF7hD9umdyuNJ4opzzg-2dNGDXghGOLBI",
  authDomain: "react-ec-solo.firebaseapp.com",
  projectId: "react-ec-solo",
  storageBucket: "react-ec-solo.appspot.com",
  messagingSenderId: "419492209367",
  appId: "1:419492209367:web:8750f6c15bcdea3b9a4692"
  };

  firebase.initializeApp(config);
  const app = initializeApp(config);
  export default firebase;