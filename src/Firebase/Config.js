// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1FFZCHKbgvnOYLz9JgYMwUMP8QBQ0Fao",
  authDomain: "motionbit-kpopschool.firebaseapp.com",
  projectId: "motionbit-kpopschool",
  storageBucket: "motionbit-kpopschool.appspot.com",
  messagingSenderId: "144681447593",
  appId: "1:144681447593:web:c18f8034527aa214a539b8",
  measurementId: "G-R98M8N8ZZN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
