// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhPvzXTFc-mNb26ckgTlm16hVqka2S7v4",
  authDomain: "coffee-auth-7fc91.firebaseapp.com",
  projectId: "coffee-auth-7fc91",
  storageBucket: "coffee-auth-7fc91.firebasestorage.app",
  messagingSenderId: "834401111512",
  appId: "1:834401111512:web:b025da65291ed8acb436ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);