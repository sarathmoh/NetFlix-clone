// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0qq03ml0yry69D_6lVuph1_9_p_uVJTg",
  authDomain: "netflixgpt-7048c.firebaseapp.com",
  projectId: "netflixgpt-7048c",
  storageBucket: "netflixgpt-7048c.appspot.com",
  messagingSenderId: "997273209597",
  appId: "1:997273209597:web:0e3cfffd8adf1454580c94",
  measurementId: "G-DKT38DQKZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();