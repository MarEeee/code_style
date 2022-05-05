// *** NPM ***
import { put, takeEvery } from 'redux-saga/effects'

// *** OTHER ***
import { FETCH_LOCATION_VARIANTS } from '../redux/constsReducer/types'
import { setLocationVariants } from '../redux/constsReducer/actions'
import locationVariants from '../data/locationVariants'

const delay = (ms) => new Promise(res=> setTimeout(res, ms))


function* fetchLocationVariantsWorker() {
    yield delay(2000)
    yield put(setLocationVariants(locationVariants))
}


export function * fetcLocationVariantsWatcher() {
    yield takeEvery(FETCH_LOCATION_VARIANTS, fetchLocationVariantsWorker)
}