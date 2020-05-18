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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
