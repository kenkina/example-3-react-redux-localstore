import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';

import { loadState, saveState } from './localStore';
import reducers from './reducers';
import { loadProducts } from './actionCreators/products';


const logger = store => next => action => {
  console.log('dispatching...', action);
  let result = next(action);
  console.log('next state...', store.getState());
  return result;
}

const persistedState = loadState();
const store = createStore(
  reducers,
  persistedState,
  applyMiddleware(logger, thunk)
);

store.subscribe(
  throttle(() => {
    saveState({
      cart: store.getState().cart
    });
  }, 500)
);

store.dispatch(loadProducts());

export default store;