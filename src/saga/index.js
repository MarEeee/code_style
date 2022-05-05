// *** NPM ***
import { all } from 'redux-saga/effects'

// *** OTHER ***
import { fetchOrdersWatcher } from './ordersSaga'
import { fetcLocationVariantsWatcher } from './locationVariantsSaga'

export function* rootWatcher() {
    yield all([fetchOrdersWatcher(), fetcLocationVariantsWatcher()])
}