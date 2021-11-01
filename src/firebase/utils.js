import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDyta_e42BHZhUEsXZW6c_cisUGv5hhKaE",
	authDomain: "crwn-db-b4e0b.firebaseapp.com",
	projectId: "crwn-db-b4e0b",
	storageBucket: "crwn-db-b4e0b.appspot.com",
	messagingSenderId: "608939874535",
	appId: "1:608939874535:web:ae50e5d3553533ddcfaa42",
	measurementId: "G-WZT2J0B0NM",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
