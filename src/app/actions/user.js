import {RECEIVE_USER } from '../reducers/user.js';
import getUser from '../services/user.js';

export const setUser = ( user={} ) => {
  return { type: RECEIVE_USER,  payload: user};
};

export const init = () => (dispatch) => (
  getUser()
    .then( n => dispatch(setUser(n)) )
);
