import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import ShopAuthReducer from "./ShopAuthSlice";


export const store = configureStore({
  reducer: { auth: ShopAuthReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type IRootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;