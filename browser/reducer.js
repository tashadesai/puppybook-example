import { getPuppies, GET_PUPPIES } from './action-creators';

const initialState = {
  allPuppies : []
};

export const reducer = (state = initialState, action)=> {
  const newObject = Object.assign({}, state);
  switch(action.type) {
      case GET_PUPPIES :
        newObject.allPuppies = action.allPuppies;
        break;
      default:
        return state;
  }
  return newObject;
};
