import { combineReducers } from 'redux';
import { themeReducer } from './theme/theme-reducer';
import { countriesReducer } from './countries/countries-reducer';

export const rooReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
});
