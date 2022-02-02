import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import db from '../../firebase/Firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import styles from './Main.module.css';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import MainBody from './MainBody';

export default function Main() {
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
    <div className={styles.container}>
      <MainHeader roomName={roomName} />
      <MainBody roomName={roomName} roomId={roomId} />
      <MainFooter roomId={roomId} />
    </div>
  );
}
