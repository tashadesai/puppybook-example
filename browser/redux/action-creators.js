/* ----- ACTIONS ----- */

export const GET_PUPPIES = 'GET_PUPPIES';

/* ----- ACTION CREATORS ----- */

export const getPuppies = puppies => {
  return {
    type: GET_PUPPIES,
    allPuppies: puppies
  };
};

/* ----- THUNKS ----- */

import axios from 'axios'

export const getAllPuppies = () => {
  return (dispatch) => {
    axios.get('/api/puppies')
      .then(res => res.data)
      .then(puppies => {
        dispatch(getPuppies(puppies))
      })
      .catch(console.error)
  }
}
