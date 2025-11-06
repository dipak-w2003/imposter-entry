// store.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userGeneralSlice from "./user-general-slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userGeneralSlice"],
};

const rootReducer = combineReducers({
  userGeneralSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store); 
