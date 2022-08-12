import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

const app = firebase.initializeApp({
apiKey: "AIzaSyCzuDg3_VOye0rnw-9Fk49_gSP3KGpK4xc",
  authDomain: "auction-app-530df.firebaseapp.com",
  projectId: "auction-app-530df",
  storageBucket: "auction-app-530df.appspot.com",
  messagingSenderId: "842544172698",
  appId: "1:842544172698:web:52b5f790e7ff25cf009923"
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
