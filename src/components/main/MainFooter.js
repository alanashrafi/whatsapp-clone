import React, { useState } from 'react';
import styles from './MainFooter.module.css';
import db from '../../firebase/Firebase';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import IconButton from '@mui/material/IconButton';
import MicIcon from '@mui/icons-material/Mic';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoodOutlinedIcon from '@mui/icons-material/MoodOutlined';
export default function MainFooter({ roomId }) {
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    const q = collection(db, 'rooms', roomId, 'messages');
    await addDoc(q, {
      user: 'd',
      message: input,
      timestamp: serverTimestamp(),
    });
    setInput('');
  };
  return (
    <div className={styles.footer}>
      <IconButton>
        <AttachFileIcon sx={{ color: 'var(--light-grey)' }} />
      </IconButton>
      <IconButton>
        <MoodOutlinedIcon sx={{ color: 'var(--light-grey)' }} />
      </IconButton>
      <form action="" onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Type a message"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </form>
      <IconButton>
        <MicIcon sx={{ color: 'var(--light-grey)' }} />
      </IconButton>
    </div>
  );
}
