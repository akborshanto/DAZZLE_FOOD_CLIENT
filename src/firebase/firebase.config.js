// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5bguTilZuJoEgofpJVmOhYgJfnKm1KSc",
  authDomain: "dazzle-food.firebaseapp.com",
  projectId: "dazzle-food",
  storageBucket: "dazzle-food.appspot.com",
  messagingSenderId: "954988690801",
  appId: "1:954988690801:web:1bad0487f2083141a4cad0",
  measurementId: "G-CRETCGNJ6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);