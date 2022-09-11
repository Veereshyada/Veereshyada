import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../Reducer/combineReducer'

export const Store = configureStore(rootReducer,applyMiddleware(thunk))