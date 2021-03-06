import { combineReducers } from 'redux';
import { themeReducer } from './theme/theme-reducer';
import { countriesReducer } from './countries/countries-reducer';
import { controlsReducer } from './controls/controls-reducer';
import { detailsReducer } from './details/details-reducer';

export const rooReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
  controls: controlsReducer,
  details: detailsReducer,
});
