import firebase from "firebase/app";

import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDJgluXSfYs2zVku4vmo9iu7yWHeBrkFms",
  authDomain: "leninent-photography.firebaseapp.com",
  projectId: "leninent-photography",
  storageBucket: "leninent-photography.appspot.com",
  messagingSenderId: "151272831894",
  appId: "1:151272831894:web:252f9f7a03edbe9a207bb7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, firestore, timestamp };
