
//selectors
export const getAllPeople = state => state.people;
export const getPeopleByName = ({ people }, characterName) => people.find(character => character.name.replaceAll(' ', '') === characterName)
export const getPeopleByUrl = ({ people }, url) => people.find(character => character.url === url)

// actions
const createActionName = actionName => `app/people/${actionName}`;
const UPDATE_PEOPLE = createActionName('UPDATE_PEOPLE')


// action creators
export const updatePeople = payload => ({ type: UPDATE_PEOPLE, payload });
export const fetchPeople = () => {
  return (dispatch) => {
    fetch("https://swapi.dev/api/people/")
      .then(res => {
        if (res.status === 200) {
          return res.json()
            .then(people => {
              console.log(people.results)
              dispatch(updatePeople(people.results))
            })
        }
      });
  }
};


const peopleReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_PEOPLE:
      return [...action.payload]
    default:
      return statePart;
  };
};

export default peopleReducer;