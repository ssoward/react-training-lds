import {RECEIVE_BOOK } from '../reducers/book-add-reducer.js';
import getBook from '../services/book-add-service.js';

export const setBook = ( book={} ) => {
  return { type: RECEIVE_BOOK,  payload: book};
};

export const init = () => (dispatch) => (
  getBook()
    .then( n => dispatch(setBook(n)) )
);
