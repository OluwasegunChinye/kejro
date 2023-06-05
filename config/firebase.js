// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import {
    getFirestore,
    collection,
    addDoc,
    getDoc,
    doc,
    onSnapshot,
    query,
    where,
} from 'firebase/firestore';

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
const auth = getAuth(app);
const db = getFirestore(app);

export {
    auth,
    db,
    createUserWithEmailAndPassword,
    getAuth,
    collection,
    addDoc,
    getDoc,
    onAuthStateChanged,
    doc,
    onSnapshot,
    query,
    where,
    signOut,
    signInWithEmailAndPassword,
};
