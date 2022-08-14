import React, { memo, useRef } from 'react';
import styles from './search_header.module.css';

// memo는 전달되는 porop이 전달되지 않으면 리렌더링이 되지않고 props이 변경되면 리렌더링 됨
const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = event => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
        <input
          ref={inputRef}
          className={styles.input}
          type="search"
          placeholder="Search..."
          onKeyPress={onKeyPress}
        />
        <button className={styles.button} type="submit" onClick={onClick}>
          <img className={styles.img} src="/images/search.png" alt="search" />
        </button>
      </div>
    </header>
  );
});

export default SearchHeader;