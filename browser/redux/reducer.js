/* ---------- ACTION TYPES ---------- */

export const GET_PUPPIES = 'GET_PUPPIES'

/* ---------- ACTION CREATORS ---------- */

export const getPuppies = puppies => {
  return {
    type: GET_PUPPIES,
    allPuppies: puppies
  }
}

/* ---------- REDUCER ---------- */

const initialState = {
  allPuppies: []
}

export const reducer = (state = initialState, action) => {
  const newObject = Object.assign({}, state)
  switch (action.type) {
    case GET_PUPPIES:
      newObject.allPuppies = action.allPuppies
      break
    default:
      return state
  }
  return newObject
}
