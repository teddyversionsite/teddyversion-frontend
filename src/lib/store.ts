import { configureStore } from '@reduxjs/toolkit'
import { elgooseApi } from './services/elgoose'
import { musicServiceApi } from './services/musicService'

export const makeStore = () => {
  return configureStore({
    reducer: {
      [elgooseApi.reducerPath]: elgooseApi.reducer,
      [musicServiceApi.reducerPath]: musicServiceApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(elgooseApi.middleware)
        .concat(musicServiceApi.middleware),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
