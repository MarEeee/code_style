// *** NPM ***
import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

// *** OTHER *** 
import wayTrackerReducer from './wayTrackerReducer/wayTrackerReducer'
import constsReducer from './constsReducer/constsReducer'
import { rootWatcher } from '../saga/index'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    globalStore: wayTrackerReducer,
    constValue: constsReducer
})

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)

export default store