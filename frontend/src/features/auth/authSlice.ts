import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

interface AuthState {
  isAuth: boolean;
  email: string;
  loading: boolean;
  error: string | undefined;
}

interface JWTPayload {
  name: string;
  uuid: string;
}

const { REACT_APP_API_BASE } = process.env;

let initialState: AuthState;
initialState = {
  isAuth: !!window.localStorage.getItem("token"),
  email: "",
  loading: false,
  error: undefined,
};

// #########
// Thunk
// #########
export const loginThunk = createAsyncThunk<
  string,
  { email: string; password: string },
  { rejectValue: string }
>("@customers/login", async ({ email, password }, thunkAPI) => {
  try {
    const res = await fetch(`${REACT_APP_API_BASE}/customers/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const JWT_token = await res.json();
    return JWT_token.data;
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
      console.log("check action payload", action.payload);
      localStorage.setItem("auth", JSON.stringify(state));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        console.log("check jwt", action.payload);
        let decoded: JWTPayload = jwt_decode(action.payload);
        console.log("check decoded", decoded);
        state.email = decoded.name;
        state.isAuth = true;

        localStorage.setItem("token", action.payload);
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;