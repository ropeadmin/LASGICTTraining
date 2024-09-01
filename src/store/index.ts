// store.ts

import { configureStore } from '@reduxjs/toolkit';

// Service
import { authApi } from './features/auth/authService';

// Slice
import authReducer from './features/auth/authSlice';


const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const authApiMiddleware = authApi.middleware;

    return getDefaultMiddleware()
      .concat(authApiMiddleware)
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
