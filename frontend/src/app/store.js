import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { cosmeticApi } from './Slices/slices'

export const store = configureStore({
  reducer: {
    [cosmeticApi.reducerPath]: cosmeticApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cosmeticApi.middleware),
})

setupListeners(store.dispatch)