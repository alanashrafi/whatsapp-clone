import React, { useEffect } from 'react';
import styles from './Chat.module.css';
import Avatar from '@mui/material/Avatar';
import db from '../../firebase/Firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';

export default function Chat({ addChat, name, id, time }) {
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
  return !addChat ? (
    <Link to={`/rooms/${id}`} className={styles.link}>
      <div className={styles.chat} key={id}>
        <Avatar
          className={styles.avatar}
          src="https://i.pravatar.cc/300
"
        />
        <div className={styles.chatInfo}>
          <div className={styles.name}>
            <p>{name}</p>
            {/* <p className={styles.date}>{time}</p> */}
          </div>
          <div className={styles.message}>
            <p>last message...</p>
          </div>
        </div>
      </div>
    </Link>
  ) : (
    <div
      key={id}
      className={`${styles.chat} ${styles.newChat}`}
      onClick={addRoom}
    >
      <h4>Add New Chat</h4>
    </div>
  );
}
