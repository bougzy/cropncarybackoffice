// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgsAmbwyil9mkFZlJExpMSDLiWLKS0lYI",
    authDomain: "cropncarry-couriers.firebaseapp.com",
    projectId: "cropncarry-couriers",
    storageBucket: "cropncarry-couriers.appspot.com",
    messagingSenderId: "1003504404100",
    appId: "1:1003504404100:web:60491028ab8ecf1df624d1",
    measurementId: "G-FW0FCV4NT9"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

export { db }; // Export the db instance


