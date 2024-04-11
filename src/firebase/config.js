// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA2CtvKLYCo7znvJEvkeCNsQqUolq7qp1Y',
  authDomain: 'journal-app-fcf9e.firebaseapp.com',
  projectId: 'journal-app-fcf9e',
  storageBucket: 'journal-app-fcf9e.appspot.com',
  messagingSenderId: '178013862014',
  appId: '1:178013862014:web:dc31f4533987643840c02f',
}

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
