// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "jb-real-estate.firebaseapp.com",
  projectId: "jb-real-estate",
  storageBucket: "jb-real-estate.appspot.com",
  messagingSenderId: "953495596907",
  appId: "1:953495596907:web:e8d94099222a303237262e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);