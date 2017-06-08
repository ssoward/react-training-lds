import React from 'react';
import styles from './style.css';
import classes from 'join-classnames';
import Button from '../Button';

export const Greeting = ({message, onClose, className}) => (
    <div className={classes(className, styles.default)}>
      <h1 className={classes(styles.title)}>{message}</h1>
      <Button onClick={onClose}>ⓧ</Button>
      
    </div>
);


export default Greeting;
