import { SET_THEME } from './theme-actions';

export const themeReducer = (state = 'ligth', { type, payload }) => {
  switch (type) {
    case SET_THEME:
      return payload;

    default:
      return state;
  }
};
