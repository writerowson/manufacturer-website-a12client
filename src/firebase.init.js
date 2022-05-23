// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmYUdfzrbXMU9dncrHSO7ByOlIZ3nJ_DE",
    authDomain: "assignment12-2fdc9.firebaseapp.com",
    projectId: "assignment12-2fdc9",
    storageBucket: "assignment12-2fdc9.appspot.com",
    messagingSenderId: "603270327814",
    appId: "1:603270327814:web:c3411d62a75c4690159d87",
    measurementId: "G-K9LCN065BF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
export default auth;