import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

import Reducers from "./reducer";
import Sagas from "./sagas";

const initialState = {};

function _getFinalCreateStore(middlewares) {
  return compose(applyMiddleware(...middlewares))(createStore);
}

const sagaMiddleware = createSagaMiddleware();
const finalCreateStore = _getFinalCreateStore([sagaMiddleware]);
const finalReducer = combineReducers(Reducers);

const store = finalCreateStore(finalReducer, initialState);

sagaMiddleware.run(Sagas);

export default store;
