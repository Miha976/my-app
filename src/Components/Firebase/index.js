// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADrDpr-1fnaVIQ7GA_1boJtgf8hquMrrE",
  authDomain: "my-app-8e3a7.firebaseapp.com",
  databaseURL: "https://my-app-8e3a7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-app-8e3a7",
  storageBucket: "my-app-8e3a7.appspot.com",
  messagingSenderId: "344088610938",
  appId: "1:344088610938:web:d1d63409b782617f0e53c3",
  measurementId: "G-ZC4XW9NZV5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth