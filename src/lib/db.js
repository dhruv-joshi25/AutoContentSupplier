// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDGOP8ZoR4gSZuzBfGUbyMm9rXb-PoEG4",
    authDomain: "something-3d9f9.firebaseapp.com",
    databaseURL: "https://something-3d9f9-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "something-3d9f9",
    storageBucket: "something-3d9f9.appspot.com",
    messagingSenderId: "145345578305",
    appId: "1:145345578305:web:5dcace2831fcdd5641cdc0",
    measurementId: "G-BSQWJ4742R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


export { database }