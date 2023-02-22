import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import initialState from './initialState';
import thunk from 'redux-thunk';
import peopleReducer from './peopleRedux';
import favReducer from './favRedux';



const subreducers = {
  people: peopleReducer,
  favorite: favReducer,
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