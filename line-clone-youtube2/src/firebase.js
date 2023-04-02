import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCsncWbStxz2C-ejXBaL9BAzqqTnkGZDig",
  authDomain: "line-clone-2-83b61.firebaseapp.com",
  projectId: "line-clone-2-83b61",
  storageBucket: "line-clone-2-83b61.appspot.com",
  messagingSenderId: "238954718638",
  appId: "1:238954718638:web:52494ccaaa364bf6a6543f"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };