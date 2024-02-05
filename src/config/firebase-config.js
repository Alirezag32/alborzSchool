// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDF0KYKF5Gu5pahuxUP_FgHXQCUAO7PMOU",
  authDomain: "alborzschool-c8890.firebaseapp.com",
  projectId: "alborzschool-c8890",
  storageBucket: "alborzschool-c8890.appspot.com",
  messagingSenderId: "522509138125",
  appId: "1:522509138125:web:54385123f37e838c989184",
  measurementId: "G-ZN6K0NLMB1",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
