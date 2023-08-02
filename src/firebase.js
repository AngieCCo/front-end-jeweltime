import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Initialize Firebase
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

console.log("HERE IS THE APIKEY:", firebaseConfig.apiKey)

// Initialize firebase
const app = initializeApp(firebaseConfig);


// Initialize firebase authentication and get a ref to the service
const auth = getAuth(app)

export { auth };


