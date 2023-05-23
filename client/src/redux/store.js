import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from "./cartReducer"
import wishlistReducer from "./wishlistReducer"
import userReducer from "./userReducer"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// const stripe = require('stripe')('sk_test_51N4ZeAJ7w1xo6cigGKVXk2CeUSi5jvKGZ2mUGEx0qfvyux1OLe8x9MpHlj33MqZr7YQF1gVm1oWJiqM6CDDLYMWn00G4gfRLZe');



const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({user: userReducer, cart: cartReducer, wishlist: wishlistReducer})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)




