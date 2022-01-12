import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyC2g9jolAQeis4uS6e2AZvgNSaH5g9jzIk",
    authDomain: "my-ecommerce-f11a0.firebaseapp.com",
    projectId: "my-ecommerce-f11a0",
    storageBucket: "my-ecommerce-f11a0.appspot.com",
    messagingSenderId: "1098400781463",
    appId: "1:1098400781463:web:e11f5b350a8ba8275f45d2",
    measurementId: "G-9VQRBPXMM0"
  };


  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

  export {auth, db, storage}