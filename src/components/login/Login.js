import React from 'react';
import styles from './Login.module.css';
import Button from '@mui/material/Button';
import {
  auth,
  googleProvider,
  signInWithRedirect,
} from '../../firebase/Firebase';

export default function Login() {
  const login = async () => {
    await signInWithRedirect(auth, googleProvider);
  };
  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <img src="/login-logo.png" alt="Logo" className={styles.logo} />
        <div className={styles.text}>
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button variant="contained" onClick={login} color="success">
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
