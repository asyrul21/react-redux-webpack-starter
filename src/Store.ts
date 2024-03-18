import { configureStore } from "@reduxjs/toolkit";

import authReducer, { getAuthInitialState } from "./state/auth/slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: {
    auth: getAuthInitialState(),
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
