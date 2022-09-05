import React, { useState, memo, useRef } from 'react';
import styles from './search_header.module.css';

// memo는 전달되는 porop이 전달되지 않으면 리렌더링이 되지않고 props이 변경되면 리렌더링 됨
const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const handleMenuSearch = (value) => {
    onSearch(value);
  }

  const onClick = () => {
    handleSearch();
  };

  const onClickMenu = e => {
    handleMenuSearch(e);
  }

  const onKeyPress = event => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };





  const [menuState, setMenuState] = useState("off");
  const state = menuState === 'on' ? styles.on : styles.off;
  console.log(state)
  // return (
  //   <li className={`${menuClick}`}





  return (
    <>
      <header className={styles.header}>

        <div className={styles.header_start}>
          <div className={styles.logo}>
            <img className={styles.img} src="/images/logo.svg" alt="logo" />
            <h3 className={styles.title}>Youtube</h3>

          </div>
        </div>

        <div className={styles.header_center}>
          <input
            ref={inputRef}
            className={styles.input}
            type="search"
            placeholder="검색"
            onKeyPress={onKeyPress}
          />
          <button className={styles.button} type="submit" onClick={onClick}>
            <img className={styles.img} src="/images/search.png" alt="search" />
          </button>
        </div>

        <div className={styles.header_end}>

        </div>


      </header>
      <section className={styles.menu}>
        <ul>
          <li className={`${state}`} onClick={onClick} >
            전체
          </li>
          <li className={`${state}`} onClick={() => onClickMenu('cook')} >
            요리
          </li>
          <li className={`${state}`} onClick={() => onClickMenu('music')} >
            음악
          </li>
          <li className={`${state}`} onClick={() => onClickMenu('football')} >
            축구
          </li>
          <li className={`${state}`} onClick={() => onClickMenu('baseball')} >
            야구
          </li>
        </ul>
      </section>
    </>
  );
});

export default SearchHeader;