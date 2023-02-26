
//selectors
export const getAllFilms = state => state.films;
export const getFilmByUrl = ({ films }, url) => films.find(film => film.url === url)


// actions
const createActionName = actionName => `app/homeWorld/${actionName}`;
const UPDATE_FILMS = createActionName('UPDATE_FILMS')


// action creators
export const updateFilms = payload => ({ type: UPDATE_FILMS, payload });
export const fetchFilms = () => {
  return (dispatch) => {
    fetch("https://swapi.dev/api/films/")
      .then(res => {
        if (res.status === 200) {
          return res.json()
            .then(films => {
              console.log(films.results)
              dispatch(updateFilms(films.results))
            })
        }
      });
  }
};


const filmsReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_FILMS:
      return [...action.payload]
    default:
      return statePart;
  };
};

export default filmsReducer;