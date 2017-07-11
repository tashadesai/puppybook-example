export const GET_PUPPIES = 'GET_PUPPIES';

export const getPuppies = puppies => {
  return {
    type: GET_PUPPIES,
    allPuppies: puppies
  };
};
