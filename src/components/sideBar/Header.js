import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Avatar from '@mui/material/Avatar';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import db, { auth } from '../../firebase/Firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Header() {
  const [theme, setTheme] = useState('dark-theme');
  const changeTheme = () => {
    if (theme === 'dark-theme') {
      setTheme('light-theme');
    } else {
      setTheme('dark-theme');
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const signout = () => {
    auth.signOut();
  };
  const addRoom = async () => {
    const roomName = prompt('enter a room name!');
    if (roomName) {
      const collectionRef = collection(db, 'rooms');
      await addDoc(collectionRef, {
        name: roomName,
        timestamp: serverTimestamp(),
      });
    }
  };

  return (
    <div className={styles.header}>
      <Avatar />
      <div className={styles.right}>
        <IconButton onClick={changeTheme}>
          {theme === 'light-theme' ? (
            <NightlightRoundIcon sx={{ color: 'var(--light-grey)' }} />
          ) : (
            <LightModeIcon sx={{ color: 'var(--light-grey)' }} />
          )}
        </IconButton>
        <IconButton onClick={addRoom}>
          <ChatRoundedIcon sx={{ color: 'var(--light-grey)' }} />
        </IconButton>
        <IconButton onClick={signout}>
          <LogoutIcon sx={{ color: 'var(--light-grey)' }} />
        </IconButton>
      </div>
    </div>
  );
}
