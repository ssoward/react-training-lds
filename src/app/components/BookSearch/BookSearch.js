import React from 'react';
import styles from './style.css';
import classes from 'join-classnames';
import Button from '../Button';

export const BookSearch = ({message, onClickBookAdd, onChangeSaveInputValue, className}) => (
  <div className={classes(className, styles.default)}>
    <h3 className={classes(styles.title)}>{message}</h3>
    <input onChange={onChangeSaveInputValue} />
    (component BookSearch.js)
    <Button onClickBookSearch={onClickBookAdd}>ADD</Button>
  </div>
);

export default BookSearch;
