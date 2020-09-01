// application内の全てのreducerを結合

import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count, })