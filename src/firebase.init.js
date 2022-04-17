// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgeE56K6JXOf960Dr3Yg7iMdEqz9YxYrg",
    authDomain: "captured-moments-11d5c.firebaseapp.com",
    projectId: "captured-moments-11d5c",
    storageBucket: "captured-moments-11d5c.appspot.com",
    messagingSenderId: "428663710765",
    appId: "1:428663710765:web:5a943f223b58699dcf84a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
console.log(auth);

export default auth;