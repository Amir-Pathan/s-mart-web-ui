// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAje-kJJujPDYTp-Z-LUPY7VtKdyvmGFWM",
  authDomain: "fir-e784d.firebaseapp.com",
  projectId: "fir-e784d",
  storageBucket: "fir-e784d.appspot.com",
  messagingSenderId: "731054114237",
  appId: "1:731054114237:web:120f7aed6d5d42cfc3bed4",
  measurementId: "G-90PPC9YG7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app)

export {db}