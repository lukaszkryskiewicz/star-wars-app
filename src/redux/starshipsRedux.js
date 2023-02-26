
//selectors
export const getAllStarships = state => state.starships;
export const getStarshipsByUrl = ({ starships }, url) => starships.find(starship => starship.url === url)


// actions
const createActionName = actionName => `app/homeWorld/${actionName}`;
const UPDATE_STARSHIPS = createActionName('UPDATE_STARSHIPS')


// action creators
export const updateStarships = payload => ({ type: UPDATE_STARSHIPS, payload });
export const fetchStarships = (page, newPage) => {
  return (dispatch) => {
    fetch("https://swapi.dev/api/starships/?page=" + page)
      .then(res => {
        if (res.status === 200) {
          return res.json()
            .then(starships => {
              console.log(starships.results)
              dispatch(updateStarships(starships.results))
              if (page < 4) {
                newPage(page + 1)
              }
            })
        }
      });
  }
};


const starshipsReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_STARSHIPS:
      return [...statePart, ...action.payload]
    default:
      return statePart;
  };
};

export default starshipsReducer;