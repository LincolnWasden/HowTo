// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5WmAsng09Maf60q7CEqcIboOd9CtJlPA",
  authDomain: "testproject-7b4ec.firebaseapp.com",
  projectId: "testproject-7b4ec",
  storageBucket: "testproject-7b4ec.appspot.com",
  messagingSenderId: "414381017589",
  appId: "1:414381017589:web:7930d7c6b1bd5bee94b8bc",
  measurementId: "G-NXBRF4RTW7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;