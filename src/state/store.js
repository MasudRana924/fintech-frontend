import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import  loginReducer  from "./user/loginSlice";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import  signUpSlice  from "./user/signupSlice";
import mytransactionsSlice  from "./user/mytransactionSlice";
import storeReducer from '../state/transaction/sendSlice'
import  sendMoneySlice  from "./transaction/sendMoneySlice";
import updateProfileSlice from '../state/user/updateNameSlice'
const persistConfig = {
  key: "authentication",
  storage
};
const middlewares = [];
if (process.env.NODE_ENV !== "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}
const persistedReducer = persistReducer(persistConfig, loginReducer);
const rootReducer = combineReducers({
  userDetails: persistedReducer,
  signup: signUpSlice,
  transactions:mytransactionsSlice,
  type:storeReducer,
  sendMoney:sendMoneySlice,
  updateName:updateProfileSlice,

});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(logger),
});

export default store;

export const persistor = persistStore(store);