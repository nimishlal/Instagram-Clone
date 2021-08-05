import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

// We will need to connect our seed data here
const config = {
  apiKey: "AIzaSyAc0cgNUEFfKcnwq9c0hgYemcTaNUz5Yrc",
  authDomain: "instagram-clone-c16f2.firebaseapp.com",
  projectId: "instagram-clone-c16f2",
  storageBucket: "instagram-clone-c16f2.appspot.com",
  messagingSenderId: "24861351959",
  appId: "1:24861351959:web:3862293bbb00ed8957bc52",
  measurementId: "G-BGSLZSXCYS"
  };

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// will run the seed data funcion here when ready
// seedDatabase(firebase);

export { firebase, FieldValue };