// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLHMrAaUHBaqp-K2Rw3--miHRv_biikHE",
  authDomain: "realtor-7ddef.firebaseapp.com",
  projectId: "realtor-7ddef",
  storageBucket: "realtor-7ddef.appspot.com",
  messagingSenderId: "916291287050",
  appId: "1:916291287050:web:ae1b2d67a005bb126387f3",
  measurementId: "G-P02SRS2FGM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);