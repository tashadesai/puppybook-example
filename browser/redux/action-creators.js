/* ---------- ACTION TYPES ---------- */

export const GET_PUPPIES = 'GET_PUPPIES';

/* ---------- ACTION CREATORS ---------- */

export const getPuppies = puppies => {
  return {
    type: GET_PUPPIES,
    allPuppies: puppies
  };
};
