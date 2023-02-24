
//selectors
//export const getCurrentSearch = state => state.searchText; // do wersji z trzymaniem tekstu w search

//actions
const SEARCH = 'app/search/SEARCH';

//action creators
export const search = payload => ({ type: SEARCH, payload });

const searchReducer = (statePart = '', action) => {
  switch (action.type) {
    case SEARCH:
      return action.payload
    default:
      return statePart;
  }
}

export default searchReducer;