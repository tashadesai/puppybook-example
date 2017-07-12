/* ----- ACTIONS ----- */

export const GET_A_PUPPY = 'GET_A_PUPPY'

/* ----- ACTION CREATORS ----- */

export const selectPuppy = puppy => ({
  type: GET_A_PUPPY,
  chosenPuppy: puppy
})

/* ----- THUNKS ----- */

import axios from 'axios'

export const getPuppy = (puppyId) => {
  return (dispatch) => {
    axios.get(`/api/puppies/${puppyId}`)
      .then(res => res.data)
      .then(chosenPuppy => {
        dispatch(selectPuppy(chosenPuppy))
      })
      .catch(console.error)
  }
}
