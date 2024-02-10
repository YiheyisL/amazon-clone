import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAQb0fj7r99fBfoCsWLfeZhE4YmDbVZKzk",
  authDomain: "clone-257c1.firebaseapp.com",
  projectId: "clone-257c1",
  storageBucket: "clone-257c1.appspot.com",
  messagingSenderId: "285821075246",
  appId: "1:285821075246:web:8a0e5b6e0cb2d02f40c4bf",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
