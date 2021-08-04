import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

// We will need to connect our seed data here
const config = {
    apiKey: "AIzaSyDS_iVqbs4mf93tG-e5H4cuXEiqqWJITZc",
    authDomain: "instagram-csa.firebaseapp.com",
    projectId: "instagram-csa",
    storageBucket: "instagram-csa.appspot.com",
    messagingSenderId: "821452725028",
    appId: "1:821452725028:web:e690251a3d3d4a0745f1b1"
  };

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// will run the seed data funcion here when ready
// seedDatabase(firebase);

export { firebase, FieldValue };