// Import Firebase functions
import {initializeApp} from 'firebase/app';
import {getFirestore, enableIndexedDbPersistence} from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA6OoffQF57jX7agW-9wemCHZoWxJaUwDs',
  authDomain: 'pritomportfolio-2c201.firebaseapp.com',
  projectId: 'pritomportfolio-2c201',
  storageBucket: 'pritomportfolio-2c201.appspot.com', // ✅ Fixed
  messagingSenderId: '769745905984',
  appId: '1:769745905984:web:2e70996b27fc8664f132a5',
  measurementId: 'G-QVEV5D7RZZ',
};

// Initialize Firebase
const app = initializeApp (firebaseConfig);

// Initialize Firestore
const db = getFirestore (app);

// Enable offline persistence
enableIndexedDbPersistence (db).catch (err => {
  console.error ('Firestore persistence error:', err);
});

export {app, db};
