// store.ts or rootReducer.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { RESET_STATE } from "./resetActions";
import userSlice from "./user/userSlice";

const appReducer = combineReducers({
  user: userSlice,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === RESET_STATE) state = undefined;
  return appReducer(state, action);
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //       ignoredPaths: [
  //         "cpu.to",
  //         "cpu.from",
  //         "memory.to",
  //         "memory.from",
  //         "rfHealth.to",
  //         "rfHealth.from",
  //         "router.fromDate",
  //         "router.toDate",
  //         "temp.to",
  //         "temp.from",
  //       ],
  //     },
  //   }),
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);
