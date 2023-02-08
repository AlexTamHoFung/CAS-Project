import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

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


// interface ShopJWTPayload {
//   username: string;
//   id: number;
// }


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



export const shopLoginThunk = createAsyncThunk<
  string,
  { username: string; password: string },
  { rejectValue: string }
>("@stores/login", async ({ username, password }, thunkAPI) => {
  try {
    console.log('shopLoginThunk: ', username, '|', password)
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
    console.log('shopLoginThunk, JWT: ', JWT_shopToken)
    return JWT_shopToken.data;
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
    shopLogin: (state, action: PayloadAction<string>) => {
      state.isShopAuth = true;
      state.username = action.payload;
      console.log("check action payload", action.payload);
      localStorage.setItem("auth", JSON.stringify(state));
    },
    logout:(state) => {
      state.isAuth = false;
      state.email = ""
      localStorage.removeItem('token');
    },
    shopLogout:(state) => {
      state.isShopAuth = false;
      state.username = ""
      localStorage.removeItem('shopToken');
    }
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
        state.email = decoded.email;
        state.isAuth = true;

        localStorage.setItem("token", action.payload);
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(shopLoginThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(shopLoginThunk.fulfilled, (state, action) => {
        state.loading = false;
        console.log("check jwt", action.payload);
        let decoded: JWTPayload = jwt_decode(action.payload);
        console.log("check decoded", decoded);
        state.username = decoded.username;
        state.isShopAuth = true;

        localStorage.setItem("shopToken", action.payload);
      })
      .addCase(shopLoginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});


export const { shopLogin } = authSlice.actions;

export const { login } = authSlice.actions;

export const { logout } = authSlice.actions;

export const { shopLogout } = authSlice.actions;

export default authSlice.reducer;