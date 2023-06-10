// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKIzqZfQCOICGR3mWMLBAJvLxF6OM35S4",
  authDomain: "piwo-real-estate.firebaseapp.com",
  projectId: "piwo-real-estate",
  storageBucket: "piwo-real-estate.appspot.com",
  messagingSenderId: "757822267145",
  appId: "1:757822267145:web:6aa2d8006d1a9c823f7dd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);