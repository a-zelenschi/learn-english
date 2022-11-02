// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeS6QAdRDASJJ7F1coUGh1bPCpbw6UfI0",
  authDomain: "english-language-1de2f.firebaseapp.com",
  projectId: "english-language-1de2f",
  storageBucket: "english-language-1de2f.appspot.com",
  messagingSenderId: "613116272162",
  appId: "1:613116272162:web:c843338e34889dbadbf47b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
