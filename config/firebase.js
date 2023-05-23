// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAWMB00VS3JzdInZcBolSXXbPDtiPcQOhY',
    authDomain: 'kejro-fbc29.firebaseapp.com',
    projectId: 'kejro-fbc29',
    storageBucket: 'kejro-fbc29.appspot.com',
    messagingSenderId: '400244024997',
    appId: '1:400244024997:web:b587334ab3895b57060f4c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
