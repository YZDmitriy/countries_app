import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';

import * as api from './config';
import { themeReducer } from './features/theme/theme-slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  devTools: true,
  middleware: (getDegaultMiddleware) =>
    getDegaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});
