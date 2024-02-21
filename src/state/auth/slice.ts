import { createSlice } from "@reduxjs/toolkit";
import { createAppSlice } from "../stateCreateSlice";

export const AuthSlice = createAppSlice({
  name: "Auth",
  initialState: {
    isAuthenticated: false,
    loggedInUser: null as unknown,
    loading: false,
    error: null as unknown,
  },
  reducers: (create) => ({
    loginUser: create.asyncThunk(
      async () => {
        //async function
      },
      {
        pending: (state) => {
          state.loading = true;
        },
        rejected: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
        fulfilled: (state, action) => {
          state.loading = false;
          state.loggedInUser = action.payload;
          state.isAuthenticated = true;
        },
        settled: (state, action) => {
          state.loading = false;
          state.error = null;
        },
      }
    ),
  }),
});
