import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MainBody.module.css';
import db from '../../firebase/Firebase';
import {
  collection,
  doc,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';
import { useButton } from '@mui/material';

export default function MainBody({ roomName, roomId }) {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    if (roomName) {
      const q = query(
        collection(db, 'rooms', roomId, 'messages'),
        orderBy('timestamp', 'asc')
      );
      const unsub = onSnapshot(q, (snapshot) => {
        setMessage(snapshot.docs.map((doc) => doc.data()));
      });
      return () => {
        unsub();
      };
    }
  }, [roomName]);
  return (
    <div className={styles.container}>
      {message.map((mes) => (
        <div className={`${styles.reciever} ${styles.sender}`}>
          <span className={styles.owner}>{mes.user}</span>
          <p>{mes.message}</p>
          {/* <span className={styles.time}>
                  {mes.timestamp.toDate().toString()}
                </span> */}
        </div>
      ))}
    </div>
  );
}
