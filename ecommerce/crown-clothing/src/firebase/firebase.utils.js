import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDDRHK-WBp_mehOlkcRc4D-1s8QpttQb7U",
  authDomain: "clothing-197a6.firebaseapp.com",
  databaseURL: "https://clothing-197a6.firebaseio.com",
  projectId: "clothing-197a6",
  storageBucket: "clothing-197a6.appspot.com",
  messagingSenderId: "424411098323",
  appId: "1:424411098323:web:75c9278e8d8e187b857826"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;