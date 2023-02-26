
//selectors
export const getAllPlanets = state => state.planet;
export const getPlanetByUrl = ({ planets }, url) => planets.find(planet => planet.url === url)


// actions
const createActionName = actionName => `app/homeWorld/${actionName}`;
const UPDATE_PLANETS = createActionName('UPDATE_PLANETS')


// action creators
export const updatePlanets = payload => ({ type: UPDATE_PLANETS, payload });
export const fetchPlanets = (page, newPage) => {
  return (dispatch) => {
    fetch("https://swapi.dev/api/planets/?page=" + page)
      .then(res => {
        if (res.status === 200) {
          return res.json()
            .then(planets => {
              console.log(planets.results)
              dispatch(updatePlanets(planets.results))
              if (page < 6) {
                newPage(page + 1)
              }
            })
        }
      });
  }
};


const planetsReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_PLANETS:
      return [...statePart, ...action.payload]
    default:
      return statePart;
  };
};

export default planetsReducer;