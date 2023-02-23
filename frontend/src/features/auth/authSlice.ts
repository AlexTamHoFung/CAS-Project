import { loginApi, registerApi, shopLoginApi } from "./../../api/auth";
import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import { RegisterFormValues } from "../Register/Register";

interface AuthState {
  isAuth: boolean;
  isShopAuth: boolean;
  username: string;
  email: string;
  loading: boolean;
  error: string | undefined;
}

interface JWTPayload {
  email: string;
  uuid: string;
  username: string;
  id: number;
}

const { REACT_APP_API_BASE } = process.env;

let initialState: AuthState;
initialState = {
  isAuth: !!window.localStorage.getItem("token"),
  isShopAuth: !!window.localStorage.getItem("shopToken"),
  username: "",
  email: "",
  loading: false,
  error: undefined,
};

// #########
// Thunk
// #########
export const registerThunk = createAsyncThunk<
  string,
  RegisterFormValues,
  { rejectValue: string }
>("@customers/register", async (data, thunkAPI) => {
  try {
    const result = await registerApi(data);
    return result.token;
  } catch (error) {
    return thunkAPI.rejectWithValue(`${REACT_APP_API_BASE}/customers/login`);
  }
});

export const loginThunk = createAsyncThunk<
  string,
  { email: string; password: string },
  { rejectValue: string }
>("@customers/login", async ({ email, password }, thunkAPI) => {
  try {
    const result = await loginApi(email, password);
    return result.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(`${REACT_APP_API_BASE}/customers/login`);
  }
});

export const shopLoginThunk = createAsyncThunk<
  string,
  { username: string; password: string },
  { rejectValue: string }
>("@stores/login", async ({ username, password }, thunkAPI) => {
  try {
    const result = await shopLoginApi(username, password);
    return result.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("AUTH Login failed");
  }
});

// #########
// authSlice
// #########

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuth = true;
      state.email = action.payload;
      localStorage.setItem("auth", JSON.stringify(state));
    },
    shopLogin: (state, action: PayloadAction<string>) => {
      state.isShopAuth = true;
      state.username = action.payload;
      localStorage.setItem("auth", JSON.stringify(state));
    },
    logout: (state) => {
      state.isAuth = false;
      state.email = "";
      localStorage.removeItem("token");
    },
    shopLogout: (state) => {
      state.isShopAuth = false;
      state.username = "";
      localStorage.removeItem("shopToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(shopLoginThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(shopLoginThunk.fulfilled, (state, action) => {
        state.loading = false;
        let decoded: JWTPayload = jwt_decode(action.payload);
        state.username = decoded.username;
        state.isShopAuth = true;

        localStorage.setItem("shopToken", action.payload);
      })
      .addCase(shopLoginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addMatcher(
        isAnyOf(loginThunk.pending, registerThunk.pending),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(loginThunk.fulfilled, registerThunk.fulfilled),
        (state, action) => {
          state.loading = false;
          let decoded: JWTPayload = jwt_decode(action.payload);
          state.email = decoded.email;
          state.isAuth = true;
          localStorage.setItem("token", action.payload);
        }
      )
      .addMatcher(
        isAnyOf(loginThunk.rejected, registerThunk.rejected),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { login, logout, shopLogin, shopLogout } = authSlice.actions;
export default authSlice.reducer;
