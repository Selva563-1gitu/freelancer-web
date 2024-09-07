// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRT53Pilcu-5Uu_XJLwwziLOjaCMzRerA",
  authDomain: "freelancingapp-b8d03.firebaseapp.com",
  projectId: "freelancingapp-b8d03",
  storageBucket: "freelancingapp-b8d03.appspot.com",
  messagingSenderId: "1024617128466",
  appId: "1:1024617128466:web:f918284fc2451e63b62ecb",
  measurementId: "G-6RHE8DQ6MX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);

export {auth};