import {applyMiddleware, createStore} from 'redux'
import { mobileReducer } from './reducers/mobile'
import createSagaMiddleware from '@redux-saga/core'
import { watchUser } from './sagas/user.saga';

const sagaMiddleware=createSagaMiddleware();

export const store=createStore(mobileReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchUser)