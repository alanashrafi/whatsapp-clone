import React from 'react';
import styles from './Sidebar.module.css';
import Header from './Header';
import Search from './Search';
import Chats from './Chats';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Header />
      <Search />
      <Chats />
    </div>
  );
}
