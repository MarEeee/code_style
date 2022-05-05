// *** NPM ***
import { put, takeEvery } from 'redux-saga/effects'

// *** OTHER ***
import {FETCH_ORDERS} from '../redux/wayTrackerReducer/types'
import {setOrders} from '../redux/wayTrackerReducer/actions'
import orders from '../data/ordres'

const delay = (ms) => new Promise(res=> setTimeout(res, ms))


function* fetchOrdersWorker() {
    yield delay(1000)
    yield put(setOrders(orders))
}


export function * fetchOrdersWatcher() {
    yield takeEvery(FETCH_ORDERS, fetchOrdersWorker)
}