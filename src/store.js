import { createStore, applyMiddleware } from 'redux'
import 'regenerator-runtime/runtime'
import createSagaMiddleware from 'redux-saga'

import mainReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(rootSaga)


export default store
