import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBpHYUS8suKTPP8JPt6utSX2ZcPQU3WrLA',
  authDomain: 'crwn-db-c782b.firebaseapp.com',
  databaseURL: 'https://crwn-db-c782b.firebaseio.com',
  projectId: 'crwn-db-c782b',
  storageBucket: 'crwn-db-c782b.appspot.com',
  messagingSenderId: '143867238708',
  appId: '1:143867238708:web:5d1b60a06f85053c382d61',
  measurementId: 'G-LM3JDXDLRP'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
