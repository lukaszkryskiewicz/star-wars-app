import strContains from "../utils/strContains";

//selectors
export const getAllPeople = state => state.people;
export const getPeopleByName = ({ people }, characterName) => people.find(character => character.name.replaceAll(' ', '') === characterName)
export const getPeopleByUrl = ({ people }, url) => people.find(character => character.url === url)
export const getFilteredPeopleByName = ({ people, search }) => people.filter(character => strContains(character.name, search));
export const getFilteredPeopleByFilm = ({ people, filmFilter }) => people.filter(character => character.films.some(item => filmFilter.includes(item)))


// actions
const createActionName = actionName => `app/people/${actionName}`;
const UPDATE_PEOPLE = createActionName('UPDATE_PEOPLE')

// action creators
export const updatePeople = payload => ({ type: UPDATE_PEOPLE, payload });
export const fetchPeople = (page, newPage) => {
  return (dispatch) => {
    fetch("https://swapi.dev/api/people/?page=" + page)
      .then(res => {
        if (res.status === 200) {
          return res.json()
            .then(people => {
              console.log(people.results)
              dispatch(updatePeople(people.results))
              if (page < 9) {
                newPage(page + 1)
              }
            })
        }
      });
  }
};


const peopleReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_PEOPLE:
      return [...statePart, ...action.payload]
    default:
      return statePart;
  };
};

export default peopleReducer;