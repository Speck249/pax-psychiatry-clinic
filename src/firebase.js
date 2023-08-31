// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2C6kPBI1mBBb35GhGafuhY-hW5P3Mdlk",
  authDomain: "pax-therapy-clinic.firebaseapp.com",
  projectId: "pax-therapy-clinic",
  storageBucket: "pax-therapy-clinic.appspot.com",
  messagingSenderId: "1054751882867",
  appId: "1:1054751882867:web:e395fe0ed923df5b75b406"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
const db = getFirestore(app);
export { db };