import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

interface ShopAuthState {
  isShopAuth: boolean;
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
  isShopAuth: !!window.localStorage.getItem("shopToken"),
  username: "",
  loading: false,
  error: undefined,
};

// #########
// Thunk
// #########
export const storeLoginThunk = createAsyncThunk<
  string,
  { username: string; password: string },
  { rejectValue: string }
>("@stores/login", async ({ username, password }, thunkAPI) => {
  try {
    const res = await fetch(`${REACT_APP_API_BASE}/stores/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const JWT_shopToken = await res.json();
    return JWT_shopToken.data;
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
    shopLogin: (state, action: PayloadAction<string>) => {
      state.isShopAuth = true;
      state.username = action.payload;
      console.log("check action payload", action.payload);
      localStorage.setItem("auth", JSON.stringify(state));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(storeLoginThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(storeLoginThunk.fulfilled, (state, action) => {
        state.loading = false;
        console.log("check jwt", action.payload);
        let decoded: JWTPayload = jwt_decode(action.payload);
        console.log("check decoded", decoded);
        state.username = decoded.username;
        state.isShopAuth = true;

        localStorage.setItem("shopToken", action.payload);
      })
      .addCase(storeLoginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { shopLogin } = ShopAuthSlice.actions;

export default ShopAuthSlice.reducer;
