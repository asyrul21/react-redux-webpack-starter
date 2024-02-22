import { PayloadAction } from "@reduxjs/toolkit";
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
      async ({ email, password }, thunkApi) => {
        //async function
        const { dispatch, fulfillWithValue, rejectWithValue } = thunkApi;
        // dispatch();
      },
      {
        pending: (state) => {
          state.loading = true;
        },
        rejected: (state, action) => {
          state.error = action.payload;
        },
        fulfilled: (state, action) => {
          state.loading = false;
          state.loggedInUser = action.payload;
          state.isAuthenticated = true;
        },
        settled: (state, action) => {
          state.loading = false;
        },
      }
    ),
    registerUser: create.asyncThunk(
      async (
        { name, email, password, acceptedTOC, subscriptionPlan },
        thunkApi
      ) => {
        // register user logic
        const { rejectWithValue, fulfillWithValue } = thunkApi;

        fulfillWithValue({
          payload: {
            type: "test_payload_type",
            name: "test",
          },
        });
      },
      {
        pending: (state) => {
          state.loading = true;
        },
        rejected: (state, action) => {
          state.loading = false;
        },
        fulfilled: (state, action) => {
          console.log("action", action);

          const { payload, type } = action;

          state.isAuthenticated = true;
          state.loggedInUser = payload;
        },
        settled: (state, action) => {
          state.loading = false;
        },
      }
    ),
    logoutUser: create.reducer<string>((state, action) => {
      console.log("state:", state);
      console.log("action:", action);
      /**
       * type: Auth/logoutUser
       * payload:
       */
      state.isAuthenticated = false;
      state.loggedInUser = null;
    }),
  }),
});

export const { loginUser, registerUser, logoutUser } = AuthSlice.actions;
export default AuthSlice.reducer;
