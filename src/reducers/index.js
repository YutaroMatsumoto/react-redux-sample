// application内の全てのreducerを結合
import { combineReducers } from 'redux'
import events from './events'

export default combineReducers({ events })