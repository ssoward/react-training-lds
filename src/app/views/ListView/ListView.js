import React from 'react';
import 'normalize.css';
import styles from './style.css';
import Greeting from '../../components/Greeting';


export default ({welcomeText = "There was no user provided.", onCloseGreeting}) => (

    <div className={styles.app}>
      <Greeting 
        message={welcomeText}
        onClose={onCloseGreeting}
      />
    </div>
);
