
//actions
const createActionName = actionName => `app/people/${actionName}`;
const UPDATE_FILM_FILTER = createActionName('UPDATE_FILM_FILTER')

//action creators
export const updateFilmFilter = payload => ({ type: UPDATE_FILM_FILTER, payload });

const filmFilterReducer = (statePart = '', action) => {
  switch (action.type) {
    case UPDATE_FILM_FILTER:
      return action.payload
    default:
      return statePart;
  }
}

export default filmFilterReducer;