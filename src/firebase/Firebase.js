// Import the functions you need from the SDKs you need
import { firebaseConfig } from './FirebaseConfig';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { getStorage, ref } from 'firebase/storage';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();
const googleProvider = new GoogleAuthProvider();
const imagesRef = ref(storage, 'images');
const audiosRef = ref(storage, 'audios');

export { auth, storage, getFirestore, googleProvider, signInWithRedirect };
export default db;
