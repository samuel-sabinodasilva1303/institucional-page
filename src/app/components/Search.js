"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './Components.module.css';


const SearchButton = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <div>

      <div className={styles.searchcontent}>
        <div className={styles.searchtext}>
          <p>Enter your destination and see the nearest residences!</p>
        </div>
        <form  className={styles.searchenv} onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className={styles.cardsmain}>

        <div className={styles.cardsitem}>
            <div className={styles.cardsitens}>
              <Image 
                  src="/images/bubble-chat.png" 
                  alt="Logo"
                  width={104}
                  height={104} 
              />
              <span>I want to buy my house</span>
              <p>Find your home and make your dreams come true in Miami!</p>
            </div>
        </div>

        <div className={styles.cardsitem}>
            <div className={styles.cardsitens}>
            <Image 
                  src="/images/money.png" 
                  alt="Logo"
                  width={104}
                  height={104} 
              />
              <span>I want to sell my property</span>
              <p>I'm interested in selling my property.</p>
            </div>
        </div>

        <div className={styles.cardsitem}>
            <div className={styles.cardsitens}>
            <Image 
                  src="/images/location.png" 
                  alt="Logo"
                  width={104}
                  height={104} 
              />
              <span>I want to rent my property</span>
              <p>I own a property that can be rented.</p>
            </div>
        </div>
      </div>

    </div>
  );
};

export default SearchButton;
