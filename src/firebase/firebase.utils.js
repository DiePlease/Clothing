import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAxrz9byOIfxIDgjcA5XPenCyF1ZxqTD9g",
  authDomain: "clothing-db-4f632.firebaseapp.com",
  databaseURL: "https://clothing-db-4f632.firebaseio.com",
  projectId: "clothing-db-4f632",
  storageBucket: "",
  messagingSenderId: "276196434714",
  appId: "1:276196434714:web:c26095e52335c1615202a3",
  measurementId: "G-VXYGDVWYPV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
