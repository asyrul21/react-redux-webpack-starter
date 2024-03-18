import { createAppSlice } from "../stateCreateSlice";
import { UserLogin, UserRegistration } from "./types";
import { loginUserAction, registerUserAction } from "./actions";
import { LOCAL_STORAGE_KEYS } from "../../constants/LocalStorageKeys";
import { deleteStorageItemsForPage } from "../../utils/LocalStorage";

export type AuthSliceStates = {
  isAuthenticated: boolean;
  loggedInUser?: { _id: string; email: string; token: string };
  loading?: boolean;
  error?: string;
};

const AuthInitialState: AuthSliceStates = {
  isAuthenticated: false,
  loggedInUser: undefined,
  loading: false,
  error: undefined,
};

export const getAuthInitialState = (): AuthSliceStates => {
  const userInfo = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_INFO);
  if (!userInfo || userInfo === "") {
    return AuthInitialState;
  }
  const currentUser = JSON.parse(userInfo);
  const isAuthenticated =
    currentUser &&
    typeof currentUser._id === "string" &&
    currentUser._id !== "";
  if (!isAuthenticated) {
    return AuthInitialState;
  }
  return {
    isAuthenticated,
    loggedInUser: currentUser,
    loading: false,
    error: undefined,
  };
};

export const AuthSlice = createAppSlice({
  name: "Auth",
  initialState: AuthInitialState,
  reducers: (create) => ({
    loginUser: create.asyncThunk(
      async (data: UserLogin, thunkApi) => {
        return loginUserAction(data, thunkApi);
      },
      {
        pending: (state) => {
          state.loading = true;
        },
        rejected: (state, action) => {
          state.error = action.payload as string;
        },
        fulfilled: (state, action) => {
          // console.log("loginUser fullfil action type:", action.type);
          // console.log("loginUser fullfil action payload:", action.payload);

          state.loggedInUser = action.payload.data;
          state.isAuthenticated = true;
          localStorage.removeItem(LOCAL_STORAGE_KEYS.LOGIN_PAGE.email);
          localStorage.setItem(
            LOCAL_STORAGE_KEYS.USER_INFO,
            JSON.stringify(action.payload.data)
          );
        },
        settled: (state, action) => {
          state.loading = false;
        },
      }
    ),
    registerUser: create.asyncThunk(
      async (data: UserRegistration, thunkApi) => {
        return registerUserAction(data, thunkApi);
      },
      {
        pending: (state) => {
          state.loading = true;
        },
        rejected: (state, action) => {
          state.error = action.payload as string;
        },
        fulfilled: (state, action) => {
          deleteStorageItemsForPage("REGISTER_PAGE");
        },
        settled: (state, action) => {
          state.loading = false;
        },
      }
    ),
    logoutUser: create.reducer<string>((state, action) => {
      /**
       * type: Auth/logoutUser
       * payload:
       */
      state.isAuthenticated = false;
      state.loggedInUser = undefined;
      localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_INFO);
    }),
    clearAuthErrors: create.reducer((state, payload) => {
      state.error = undefined;
    }),
  }),
});

export const { loginUser, registerUser, logoutUser, clearAuthErrors } =
  AuthSlice.actions;
export default AuthSlice.reducer;
