import { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../stateCreateSlice";
import { UserLogin, UserRegistration } from "./types";
import { useAppDispatch } from "../stateHooks";
import { AppDispatch, RootState } from "../../Store";

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
      async ({ email, password }: UserLogin, thunkApi) => {
        //async function
        //...

        const state = thunkApi.getState() as RootState;
        const dispatch = thunkApi.dispatch as AppDispatch;

        const { fulfillWithValue, rejectWithValue } = thunkApi;

        // ok
        if (email === "admin@mail.com") {
          return fulfillWithValue({ data: "this should be the payload" });
        }
        // error
        throw rejectWithValue({ someKey: "test" });
      },
      {
        pending: (state) => {
          state.loading = true;
        },
        rejected: (state, action) => {
          console.log("rejected action:", action);
          state.error = action.payload;
        },
        fulfilled: (state, action) => {
          console.log("loginUser fullfil action type:", action.type);
          console.log("loginUser fullfil action payload:", action.payload);

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
        {
          name,
          email,
          password,
          acceptedTOC,
          subscriptionPlan,
        }: UserRegistration,
        thunkApi
      ) => {
        // register user logic
        // ...

        const { rejectWithValue, fulfillWithValue, dispatch, getState } =
          thunkApi;

        console.log("dispatching login!");

        dispatch({
          type: "Auth/loginUser/fulfilled",
          payload: {
            name: "test register reducer to login reducer",
          },
        });

        return fulfillWithValue({
          name: "register fulfill return",
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
          console.log(" Register fulfilled action type:", action.type);
          console.log(" Register fulfilled action payload:", action.payload);

          // const { payload, type } = action;

          // state.isAuthenticated = true;
          // state.loggedInUser = payload;
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
