import React, { useState } from 'react';
import styles from './Search.module.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Search() {
  const [search, setSearch] = useState('');

  const setText = (e) => {
    setSearch(e.target.value);
  };
  const deleteText = (e) => {
    setSearch('');
  };
  return (
    <div className={styles.searchbar}>
      {search ? (
        <ArrowBackIcon
          sx={{ color: '#b1b3b5', cursor: 'pointer' }}
          onClick={deleteText}
        />
      ) : (
        <SearchIcon sx={{ color: '#b1b3b5' }} />
      )}
      <input
        type="text"
        className={styles.searchinput}
        value={search}
        onChange={setText}
        placeholder="Search or start new chat"
      />
      <CloseIcon
        sx={{ color: '#b1b3b5', cursor: 'pointer' }}
        onClick={deleteText}
        className={search ? '' : styles.hide}
      />
    </div>
  );
}
