
//selectors
export const getAllFavorites = state => state.favorite;


// actions
const createActionName = actionName => `app/fav/${actionName}`;
const ADD_TO_FAV = createActionName('ADD_TO_FAV')
const REMOVE_FAV = createActionName('REMOVE_FAV')


// action creators
export const addToFav = payload => ({ type: ADD_TO_FAV, payload });
export const removeFav = payload => ({ type: REMOVE_FAV, payload });



const favReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return [...statePart, action.payload]
    case REMOVE_FAV:
      return statePart.filter(character => character !== action.payload)
    default:
      return statePart;
  };
};

export default favReducer;