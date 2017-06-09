import React from 'react';
import styles from './style.css';
import classes from 'join-classnames';
import Button from '../Button';

export const BookSearch = ({message, onClickBookAdd, onChangeSaveInputValue, className}) => (
  <div className={classes(className, styles.default)}>
    <div>
      <strong className={classes(styles.title)}>{message}</strong>
      <p><span>(component BookSearch.js)</span></p>
    </div>
    <div>
      <input onChange={onChangeSaveInputValue} />
      <Button onClick={onClickBookAdd}>ADD</Button>
    </div>
  </div>
);

export default BookSearch;
