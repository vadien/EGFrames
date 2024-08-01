// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1_aegCSS0BX2eFDPZWJvxxwfhWvA9EE8",
  authDomain: "eg-frames.firebaseapp.com",
  projectId: "eg-frames",
  storageBucket: "eg-frames.appspot.com",
  messagingSenderId: "1007260158013",
  appId: "1:1007260158013:web:44385a317d20895d0cc254",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
