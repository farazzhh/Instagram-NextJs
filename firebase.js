// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCumQsy-SIryuZCii78bb69W6Q3VxeO2Sg",
  authDomain: "insta-next-281f6.firebaseapp.com",
  projectId: "insta-next-281f6",
  storageBucket: "insta-next-281f6.appspot.com",
  messagingSenderId: "100324145813",
  appId: "1:100324145813:web:232d61204bdf937858f99c",
  measurementId: "G-49YBFYB3S1",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
