import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import map from './slices/map.slice'
import covid from './slices/covid.slice'
import mapSaga from './sagas/map.saga'
import covidSaga from './sagas/covid.saga'

const saga = createSagaMiddleware()

const store = configureStore({
  reducer: {
    map,
    covid
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
})
saga.run(mapSaga)
saga.run(covidSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store