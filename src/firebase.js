// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKVbVvsg7CbLiz2AuA4FEIEgJtdiaS4LQ",
  authDomain: "bookmyheritage-52e37.firebaseapp.com",
  projectId: "bookmyheritage-52e37",
  storageBucket: "bookmyheritage-52e37.firebasestorage.app",
  messagingSenderId: "370911575071",
  appId: "1:370911575071:web:a07e60d01c338a0a2ba92a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);