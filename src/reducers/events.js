// actionのtypeをimport

import _ from 'lodash' // 配列のデータを編集するのが得意なパッケージ？
import { READ_EVENTS, DELETE_EVENT, READ_EVENT, UPDATE_EVENT, CREATE_EVENT } from '../actions'


export default (events = {}, action) => {
    switch(action.type) {
        case READ_EVENTS:
            return _.mapKeys(action.response.data, 'id')
        case READ_EVENT:
        case CREATE_EVENT:
        case UPDATE_EVENT:
            const data = action.response.data
            return { ...events, [data.id]: data }
        case DELETE_EVENT:
            delete events[action.id]
            return { ...events }
        default:
            return events
    }
}