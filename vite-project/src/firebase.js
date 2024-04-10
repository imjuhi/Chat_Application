// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyjRq9jtK8pgA0lCVrLMvJQgyi3K7BrYI",
  authDomain: "chat-262bb.firebaseapp.com",
  projectId: "chat-262bb",
  storageBucket: "chat-262bb.appspot.com",
  messagingSenderId: "310695527899",
  appId: "1:310695527899:web:b1b9a0d1135834bf5e53fe",
  measurementId: "G-D1HMYSBVFX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

