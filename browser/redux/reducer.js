import { getPuppies, GET_PUPPIES } from './allPuppies-actions'
import { selectPuppy, GET_A_PUPPY } from './singlePuppy-actions'

const initialState = {
  allPuppies: [],
  chosenPuppy: {}
}

export const reducer = (state = initialState, action) => {
  const newObject = Object.assign({}, state)
  switch (action.type) {
    case GET_PUPPIES:
      newObject.allPuppies = action.allPuppies
      break
    case GET_A_PUPPY:
      newObject.chosenPuppy = action.chosenPuppy
      break
    default:
      return state
  }
  return newObject
}
