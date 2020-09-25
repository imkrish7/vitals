import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import rootReducer from '../reducers';

const store = () => createStore(rootReducer, {}, applyMiddleware(thunk, reduxImmutableStateInvariant()));

export default store;