
//selectors
export const getAllStarships = state => state.starships;
export const getStarshipsByUrl = ({ starships }, url) => starships.find(starship => starship.url === url)


// actions
const createActionName = actionName => `app/homeWorld/${actionName}`;
const UPDATE_STARSHIPS = createActionName('UPDATE_STARSHIPS')


// action creators
export const updateStarships = payload => ({ type: UPDATE_STARSHIPS, payload });
export const fetchStarships = () => {
  return (dispatch) => {
    fetch("https://swapi.dev/api/starships/")
      .then(res => {
        if (res.status === 200) {
          return res.json()
            .then(starships => {
              console.log(starships.results)
              dispatch(updateStarships(starships.results))
            })
        }
      });
  }
};


const starshipsReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_STARSHIPS:
      return [...action.payload]
    default:
      return statePart;
  };
};

export default starshipsReducer;