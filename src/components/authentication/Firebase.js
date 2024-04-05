// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLwJAdIymWcT5W1-_m8Aw0jD_6wtxQ8g4",
  authDomain: "bike-ride-dba4b.firebaseapp.com",
  projectId: "bike-ride-dba4b",
  storageBucket: "bike-ride-dba4b.appspot.com",
  messagingSenderId: "827369304397",
  appId: "1:827369304397:web:5497fbf0e30bfa536a4704",
  measurementId: "G-QDS0J6ZWW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
