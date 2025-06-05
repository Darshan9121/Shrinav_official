import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9ScDjHPiGdc_8DEo5RSplS88xPglOeZg",
  authDomain: "shrinav-official.firebaseapp.com",
  projectId: "shrinav-official",
  storageBucket: "shrinav-official.firebasestorage.app",
  messagingSenderId: "117166961459",
  appId: "1:117166961459:web:3dd2b3f77edf2161e24446",
  measurementId: "G-C8NB47S2EM"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };