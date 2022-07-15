import axios from 'axios';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { rooReducer } from './root-reducer';
import * as api from '../config';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rooReducer,
  composeEnhancers(
    applyMiddleware(
      thunk.withExtraArgument({
        client: axios,
        api,
      })
    )
  )
);
