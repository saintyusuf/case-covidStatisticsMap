import {call, put, takeEvery} from 'redux-saga/effects'
import { getCovidData, getCovidDataFailure, getCovidDataSuccess } from '../slices/covid.slice'
import axios from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

function* fetchMapData(action:PayloadAction<string>): Generator<any, void, any> {
  try {
    const data = yield call(() => axios.get('https://covid-19-statistics.p.rapidapi.com/reports',{
      headers: {
        "X-RapidAPI-Key": "9d70bb022dmshfc3ef09079bfadfp1d62acjsn1d8dd366ec8c",
        'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
      },
      params: {
        iso: action.payload
      }
    }))
    yield put(getCovidDataSuccess(data.data.data[0]))
  } catch (err) {
    yield put(getCovidDataFailure())
  }
}

function* covidSaga(){
  yield takeEvery(getCovidData, fetchMapData)
}

export default covidSaga