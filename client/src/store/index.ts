import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {workShopReducer, Workshop} from './reducers/workshop.reducer';

declare global {
   interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
   }
}

export interface GlobalState {
   workshop:Workshop,
}

const reducers = combineReducers<GlobalState>({
   workshop:workShopReducer
});

// Enable redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Export store (state) so we can use it in <Provider> or store.dispatch(action)
export const store =  createStore(reducers, composeEnhancers(applyMiddleware(thunk)));