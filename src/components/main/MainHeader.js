import React, { useEffect, useState } from 'react';
import styles from './MainHeader.module.css';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import { useParams } from 'react-router-dom';
import db from '../../firebase/Firebase';
import { onSnapshot, doc } from 'firebase/firestore';

export default function MainHeader() {
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState('');

  useEffect(() => {
    if (roomId) {
      onSnapshot(doc(db, `rooms/${roomId}`), (snapshot) => {
        setRoomName(snapshot.data().name);
      });
    }
  }, [roomId]);

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Avatar />
        <p>{roomName}</p>
      </div>
      <div className={styles.right}>
        <IconButton>
          <SearchIcon sx={{ color: 'var(--light-grey)' }} />
        </IconButton>
        <IconButton>
          <MoreVertSharpIcon sx={{ color: 'var(--light-grey)' }} />
        </IconButton>
      </div>
    </div>
  );
}
