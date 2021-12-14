// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1swOskREs_FpoLROrjbJgjYCBdFBGymU",
  authDomain: "react-fir-2021.firebaseapp.com",
  projectId: "react-fir-2021",
  storageBucket: "react-fir-2021.appspot.com",
  messagingSenderId: "350777620910",
  appId: "1:350777620910:web:7e08e4fdd5e8d0b222703f"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
