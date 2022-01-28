import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Avatar from '@mui/material/Avatar';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import DataSaverOffSharpIcon from '@mui/icons-material/DataSaverOffSharp';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import IconButton from '@mui/material/IconButton';
import { auth } from '../../firebase/Firebase';

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

  return (
    <div className={styles.header}>
      <Avatar />
      <div className={styles.right}>
        <IconButton onClick={changeTheme}>
          <DataSaverOffSharpIcon sx={{ color: 'var(--light-grey)' }} />
        </IconButton>
        <IconButton onClick={signout}>
          <ChatRoundedIcon sx={{ color: 'var(--light-grey)' }} />
        </IconButton>
        <IconButton>
          <MoreVertSharpIcon sx={{ color: 'var(--light-grey)' }} />
        </IconButton>
      </div>
    </div>
  );
}
