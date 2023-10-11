// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE3DbBbgggpIzNdvv9FDJe4tdHlhdfwUQ",
  authDomain: "operativo-c011e.firebaseapp.com",
  databaseURL: "https://operativo-c011e-default-rtdb.firebaseio.com",
  projectId: "operativo-c011e",
  storageBucket: "operativo-c011e.appspot.com",
  messagingSenderId: "21066243351",
  appId: "1:21066243351:web:c26876262cc0d564922b52"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firebase_auth = getAuth(app);