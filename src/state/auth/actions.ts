import {
  AsyncThunkConfig,
  GetThunkAPI,
} from "@reduxjs/toolkit/dist/createAsyncThunk";
import { UserLogin, UserRegistration } from "./types";
import axios, { AxiosResponse } from "axios";
import {
  buildJsonHeaderConfig,
  extractErrorMessage,
} from "../../utils/AxiosConfig";
import { post } from "../../utils/api";
import { AppDispatch, RootState } from "../../Store";

export const loginUserAction = async (
  data: UserLogin,
  thunk: GetThunkAPI<AsyncThunkConfig>
) => {
  const { fulfillWithValue, rejectWithValue } = thunk;
  const { email, password } = data;
  const config = buildJsonHeaderConfig();

  //   const state = thunk.getState() as RootState;
  //   const dispatch = thunk.dispatch as AppDispatch;

  try {
    const response: AxiosResponse = await post(
      "/auth/signin",
      {
        email,
        password,
      },
      config
    );
    if (response.status === 200 || response.status === 201) {
      return fulfillWithValue({ ...response.data });
    } else {
      throw new Error("Login failed: " + response.statusText);
    }
  } catch (error) {
    return rejectWithValue(extractErrorMessage(error));
  }
};

export const registerUserAction = async (
  data: UserRegistration,
  thunk: GetThunkAPI<AsyncThunkConfig>
) => {
  const { fulfillWithValue, rejectWithValue } = thunk;
  const { name, email, password, acceptedTOC } = data;
  const config = buildJsonHeaderConfig();

  //   const state = thunk.getState() as RootState;
  const dispatch = thunk.dispatch as AppDispatch;

  try {
    const response: AxiosResponse = await post(
      "/auth/signup",
      {
        name,
        email,
        password,
        acceptedTOC,
      },
      config
    );
    if (response.status === 200 || response.status === 201) {
      dispatch({
        type: "Auth/loginUser/fulfilled",
        payload: {
          ...response.data,
        },
      });
      fulfillWithValue(true);
    } else {
      throw new Error("Signup failed: " + response.statusText);
    }
  } catch (error) {
    return rejectWithValue(extractErrorMessage(error));
  }
};
