// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAUFD4a2F3CPAXvDOOWc_26EjCIDG3bqCA",
  authDomain: "first-cry-4abb8.firebaseapp.com",
  projectId: "first-cry-4abb8",
  storageBucket: "first-cry-4abb8.appspot.com",
  messagingSenderId: "1077740003495",
  appId: "1:1077740003495:web:54e0a5f36bd91175137b82",
  measurementId: "G-VFVD7RHLWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
