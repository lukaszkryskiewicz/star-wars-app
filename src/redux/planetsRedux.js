
//selectors
export const getAllPlanets = state => state.planet;
export const getPlanetByUrl = ({ planets }, url) => planets.find(planet => planet.url === url)


// actions
const createActionName = actionName => `app/homeWorld/${actionName}`;
const UPDATE_PLANETS = createActionName('UPDATE_PLANETS')


// action creators
export const updatePlanets = payload => ({ type: UPDATE_PLANETS, payload });
export const fetchPlanets = () => {
  return (dispatch) => {
    fetch("https://swapi.dev/api/planets/")
      .then(res => {
        if (res.status === 200) {
          return res.json()
            .then(planets => {
              console.log(planets.results)
              dispatch(updatePlanets(planets.results))
            })
        }
      });
  }
};


const planetsReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_PLANETS:
      return [...action.payload]
    default:
      return statePart;
  };
};

export default planetsReducer;