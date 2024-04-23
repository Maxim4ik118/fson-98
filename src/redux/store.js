import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { mailboxReducer } from "./mailbox/mailboxReducer";
import { timerReducer } from "./timer/timerSlice";
import { productDetailsReducer } from "./productDetails/productDetailsSlice";
import { authReducer } from "./auth/authSlice";

const authPeristConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    // mailbox: persistReducer(mailboxPeristConfig, mailboxReducer),
    mailbox: mailboxReducer,
    countDownTimer: timerReducer,
    productDetails: productDetailsReducer,
    auth: persistReducer(authPeristConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
