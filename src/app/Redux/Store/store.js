import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../Reducer/reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const reducers = combineReducers({
  cartReducer: cartReducer,
});

const persistConfig = {
  key: "course_cart",
  storage,
  timeout: null,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

export default store;
export { persistor };
