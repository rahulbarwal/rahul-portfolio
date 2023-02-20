// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2PrRV-czrG5etubusZOi0-pZ4wDbJU5A",
  authDomain: "rahulbarwalprotfolio.firebaseapp.com",
  projectId: "rahulbarwalprotfolio",
  storageBucket: "rahulbarwalprotfolio.appspot.com",
  messagingSenderId: "593336611423",
  appId: "1:593336611423:web:fe9b1680acf7817ad2a1ea",
  measurementId: "G-28081CEJGC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
