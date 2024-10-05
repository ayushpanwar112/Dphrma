// components/Loading.js
import React from 'react';
import styles from './Loading.module.css'; // Create this CSS file for styling

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
       <img src="./assest/logo.png" width={100} className={styles.logo}/>
      <p >Loading...</p>
    </div>
  );
};

export default Loading;
