import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

interface ShopAuthState {
  isAuth: boolean;
  username: string;
  loading: boolean;
  error: string | undefined;
}

interface JWTPayload {
  username: string;
}




const { REACT_APP_API_BASE } = process.env;

let initialState: ShopAuthState;
initialState = {
  isAuth: !!window.localStorage.getItem("token"),
  username: "",
  loading: false,
  error: undefined,
};

// #########
// Thunk
// #########
export const loginThunk = createAsyncThunk<
  string,
  { username: string; password: string },
  { rejectValue: string }
>("@companies/login", async ({ username, password }, thunkAPI) => {
  try {
    const res = await fetch(`${REACT_APP_API_BASE}/companies/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
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
// ShopAuthSlice
// #########

export const ShopAuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuth = true;
      state.username = action.payload;
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
        state.username = decoded.username;
        state.isAuth = true;

        localStorage.setItem("token", action.payload);
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { login } = ShopAuthSlice.actions;

export default ShopAuthSlice.reducer;
