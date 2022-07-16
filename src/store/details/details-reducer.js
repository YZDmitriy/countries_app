import { SET_LOADING, SET_ERROR, SET_COUNTRY } from './details-actions';

const initialState = {
  currentCountry: null,
  status: 'idle', // loading || rejected || received
  error: null,
};

export const detailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        error: null,
        status: 'loading',
      };

    case SET_ERROR:
      return {
        ...state,
        status: 'rejected',
        error: payload,
      };

    case SET_COUNTRY:
      return {
        ...state,
        status: 'received',
        currentCountry: payload,
      };

    default:
      return state;
  }
};
