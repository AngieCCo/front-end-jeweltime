import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyChJOxca_uXW7C5-09hwGHg842iuinUrzI",
    authDomain: "jeweltime-development.firebaseapp.com",
    projectId: "jeweltime-development",
    storageBucket: "jeweltime-development.appspot.com",
    messagingSenderId: "913204107016",
    appId: "1:913204107016:web:2574263da972b12a5c3ebd"
};

console.log("HERE IS THE APIKEY:", firebaseConfig.apiKey)

// Initialize firebase
const app = initializeApp(firebaseConfig);


// Initialize firebase authentication and get a ref to the service
const auth = getAuth(app)

export { auth };


