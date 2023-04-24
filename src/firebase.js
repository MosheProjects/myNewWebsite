// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2lQp01BX9yIn7cFXuEDneIwJ0GWkseZU",
  authDomain: "sofrai-stam.firebaseapp.com",
  projectId: "sofrai-stam",
  storageBucket: "sofrai-stam.appspot.com",
  messagingSenderId: "152936958443",
  appId: "1:152936958443:web:93e97c5f674682d3a4f1ae",
  measurementId: "G-VGJP0C9YTC",
  storageBucket: 'gs://sofrai-stam.appspot.com'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth=getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);


