import React, { useEffect, useState } from 'react';
import Chat from './Chat';
import styles from './Chats.module.css';
import db from '../../firebase/Firebase';
import {
  collection,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from 'firebase/firestore';

export default function Chats() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'rooms'), orderBy('timestamp', 'desc'));
    const unsub = onSnapshot(q, (snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => {
          return { id: doc.id, data: doc.data() };
        })
      );
    });
    return () => {
      unsub();
    };
  }, []);

  return (
    <div className={styles.chats}>
      {rooms.map((room) => {
        return (
          <Chat
            id={room.id}
            name={room.data.name}
            key={room.id}
            time={room.data.timestamp}
          />
        );
      })}
    </div>
  );
}
