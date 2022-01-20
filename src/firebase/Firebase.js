// Import the functions you need from the SDKs you need
import { firebaseConfig } from './FirebaseConfig';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();
