import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import initialState from './initialState';
import thunk from 'redux-thunk';
import peopleReducer from './peopleRedux';
import favReducer from './favRedux';
import planetsReducer from './planetsRedux';
import filmsReducer from './filmsRedus';
import starshipsReducer from './starshipsRedux';
import searchReducer from './searchRedux';



const subreducers = {
  people: peopleReducer,
  favorite: favReducer,
  planets: planetsReducer,
  films: filmsReducer,
  starships: starshipsReducer,
  search: searchReducer,
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;