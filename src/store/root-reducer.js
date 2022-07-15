import { combineReducers } from 'redux';
import { themeReducer } from './theme/theme-reducer';

export const rooReducer = combineReducers({
  theme: themeReducer,
});
