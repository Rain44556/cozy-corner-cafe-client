// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByEpBYIkD4azAKUUfqtZtUJLUVuf_LhrY",
  authDomain: "cozy-corner-cafe-d4193.firebaseapp.com",
  projectId: "cozy-corner-cafe-d4193",
  storageBucket: "cozy-corner-cafe-d4193.firebasestorage.app",
  messagingSenderId: "634611748565",
  appId: "1:634611748565:web:60a5799bbc3676946c1c5c"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);