// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3SvS6KSWrab7pfBrSXSgQ7OF_8sNSYmo",
  authDomain: "netflixgpt-7eeea.firebaseapp.com",
  projectId: "netflixgpt-7eeea",
  storageBucket: "netflixgpt-7eeea.appspot.com",
  messagingSenderId: "791832151235",
  appId: "1:791832151235:web:6bdf03ea0c45613f2c4e76",
  measurementId: "G-HJW0BFVDBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();