import {call, put, takeEvery} from 'redux-saga/effects'
import { getMapData, getMapDataFailure, getMapDataSuccess } from '../slices/map.slice'

type SagaReturnType = ReturnType<typeof fetchMapData>

function* fetchMapData(): Generator<any, void, any> {
  try {
    const data = yield call(() => fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json'))
    const dataJson = yield data.json()
    const dataFiltered = yield dataJson.features.filter((country:any)=>country.properties.name !== "Bermuda")
    yield put(getMapDataSuccess(dataFiltered))
  } catch (err) {
    yield put(getMapDataFailure())
  }
}

function* mapSaga(){
  yield takeEvery(getMapData, fetchMapData)
}

export default mapSaga