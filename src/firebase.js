// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5RLAhAo9oxEnMgKCG1VR36ALNBEzC6iw",
  authDomain: "unlocked-34fea.firebaseapp.com",
  databaseURL: "https://unlocked-34fea-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "unlocked-34fea",
  storageBucket: "unlocked-34fea.appspot.com",
  messagingSenderId: "756824605465",
  appId: "1:756824605465:web:1871ad5311e63fc8b5fb88",
  measurementId: "G-CDBTLBN829"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};