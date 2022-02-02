import React from 'react';
import styles from './Chat.module.css';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

export default function Chat({ name, id }) {
  return (
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
  );
}
