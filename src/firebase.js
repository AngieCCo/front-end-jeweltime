import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Initialize Firebase
const firebaseConfig = {
};

console.log("HERE IS THE APIKEY:", firebaseConfig.apiKey)

// Initialize firebase
const app = initializeApp(firebaseConfig);


// Initialize firebase authentication and get a ref to the service
const auth = getAuth(app)

export { auth };


