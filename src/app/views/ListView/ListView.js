import React from 'react';
import 'normalize.css';
import styles from './style.css';
import Greeting from '../../components/Greeting';


export default (
  {
    welcomeText = "There was no user provided.",
    onCloseGreeting,
    isGreetingVisible = true
  }
) => (

  <div className={styles.app}>
    {isGreetingVisible && <Greeting
      message={welcomeText}
      onClose={onCloseGreeting}
    />}
  </div>
);
