/* ----- ACTIONS ----- */

export const GET_A_PUPPY = 'GET_A_PUPPY';

/* ----- ACTION CREATORS ----- */

export const getPuppies = puppies => {
  return {
    type: GET_A_PUPPY,
    allPuppies: puppies
  };
};

/* ----- THUNKS ----- */

import axios from 'axios'

export const getPuppy = (puppyId) => {
  return (dispatch) => {
    axios.get(`/api/puppies/${puppyId}`)
      .then(res => res.data)
      .then(puppies => {
        dispatch(getPuppies(puppies))
      })
      .catch(console.error)
  }
}
