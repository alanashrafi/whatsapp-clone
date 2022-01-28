import React from 'react';
import styles from './Main.module.css';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import MainBody from './MainBody';

export default function Main() {
  return (
    <div className={styles.container}>
      <MainHeader />
      <MainBody />
      <MainFooter />
    </div>
  );
}
