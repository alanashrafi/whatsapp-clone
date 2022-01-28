import { useEffect } from 'react';
import db, { auth } from '../firebase/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';

export default function useAuthUser() {
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      const userRef = doc(db, 'users', user.uid);
      getDoc(userRef).then((doc) => {
        if (!doc.exists()) {
          setDoc(userRef, {
            name: user.displayName,
            photoURL: user.photoURL,
            timestamp: serverTimestamp(),
          });
        }
      });
    }
  }, [user]);
  return user;
}
