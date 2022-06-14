// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import 'firebase/firebase-firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiFHz2dQrWvrLBM7nx5MlX-lMPM6W24jM",
  authDomain: "delivery-6c734.firebaseapp.com",
  projectId: "delivery-6c734",
  storageBucket: "delivery-6c734.appspot.com",
  messagingSenderId: "584760142885",
  appId: "1:584760142885:web:3bbd9b4e7bbebbd496a3cc",
  measurementId: "G-RKGSSX1R09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var firestore = firebase.firestore();

export default firestore;