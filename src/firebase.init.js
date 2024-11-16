// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA8nEcyWlzkhnevB9fBWQnKKpqzaR3ieg",
  authDomain: "auth-moha-milon-ee312.firebaseapp.com",
  projectId: "auth-moha-milon-ee312",
  storageBucket: "auth-moha-milon-ee312.firebasestorage.app",
  messagingSenderId: "347682338070",
  appId: "1:347682338070:web:cf34c98227132ea8f20c37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);