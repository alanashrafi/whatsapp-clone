import React, { useEffect, useState } from 'react';
import Chat from './Chat';
import styles from './Chats.module.css';
import db from '../../firebase/Firebase';
import { collection, onSnapshot } from 'firebase/firestore';

export default function Chats() {
  const [rooms, setRooms] = useState([]);

  const getData = async () => {
    const roomRef = collection(db, 'rooms');
    const unsub = onSnapshot(roomRef, (snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => {
          return { id: doc.id, data: doc.data() };
        })
      );
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.chats}>
      <Chat addChat />

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
