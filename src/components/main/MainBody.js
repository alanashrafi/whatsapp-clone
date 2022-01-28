import React from 'react';
import styles from './MainBody.module.css';

export default function MainBody() {
  return (
    <div className={styles.container}>
      <p className={`${styles.reciever}`}>
        <span className={styles.owner}>alan ashrafi</span>
        spas
        <span className={styles.time}>16:45</span>
      </p>
      <p className={`${styles.sender} ${styles.reciever}`}>
        <span className={styles.owner}>ramyar ashrafi</span>
        spas
        <span className={styles.time}>16:45</span>
      </p>
    </div>
  );
}
