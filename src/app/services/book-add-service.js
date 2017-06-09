import {API_HOST} from '../env.js';


export default (searchStr) => (
  fetch(`${API_HOST}/api/book?str=${searchStr}`)//todo use google api and skip server
    .then(response =>
      response.ok ? response.json() : Promise.reject(response) )
);
