// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyActfHaWeFpI6o2KZNLcNlIgGLwznWyIq0",
  authDomain: "about-sunglass-concept.firebaseapp.com",
  projectId: "about-sunglass-concept",
  storageBucket: "about-sunglass-concept.appspot.com",
  messagingSenderId: "702635284060",
  appId: "1:702635284060:web:74cd505e2eb176269a3899"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);