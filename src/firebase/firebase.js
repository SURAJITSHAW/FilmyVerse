// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBoPRfGoi4JQtujpfut0bICf5HAWyC7nCc",
  authDomain: "filmyverse-f2b39.firebaseapp.com",
  projectId: "filmyverse-f2b39",
  storageBucket: "filmyverse-f2b39.appspot.com",
  messagingSenderId: "338648830953",
  appId: "1:338648830953:web:53123a62802a7359877178",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");

export default app;
