// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflixgpt-latest.firebaseapp.com",
  projectId: "netflixgpt-latest",
  storageBucket: "netflixgpt-latest.appspot.com",
  messagingSenderId: "190510267960",
  appId: "1:190510267960:web:bb4e0a93124bc8ec9db0cd",
  measurementId: "G-8J6PC7Y0YK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
