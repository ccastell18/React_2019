import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBcBaHsPcsZQGyfllWdWt2g6VnQb_YxstQ",
  authDomain: "crown-db-d414d.firebaseapp.com",
  databaseURL: "https://crown-db-d414d.firebaseio.com",
  projectId: "crown-db-d414d",
  storageBucket: "crown-db-d414d.appspot.com",
  messagingSenderId: "135750219085",
  appId: "1:135750219085:web:36aafa7ee2881f309b7304",
  measurementId: "G-1TCDB614P8"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
