 import firebase from "firebase/compat/app"
 import "firebase/compat/auth";
 import "firebase/compat/firestore";

 const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCZ8mC1a4nz_oi40eyvae5QMdgJsvUfoXA",
  authDomain: "line-clone-a415c.firebaseapp.com",
  projectId: "line-clone-a415c",
  storageBucket: "line-clone-a415c.appspot.com",
  messagingSenderId: "885212505085",
  appId: "1:885212505085:web:c3dc5b9e9a05f197c36f94"
 });

 const db = firebaseApp.firestore();
  
 const auth = firebase.auth();

 export { db, auth }