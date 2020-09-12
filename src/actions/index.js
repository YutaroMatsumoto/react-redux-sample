// これはactionを定義して、actionをreturnする関数つまり、actioncreatorを定義した。
// 「あるイベントをつかんだ時に、当該のactioncreatorをimportして、適切な状態遷移を実行させるための
// 仕組みを行っている」と理解しておく
// actionとはjavascriptのオブジェクトのこと
// typeというkeyと、typeに対応する値を持つという特徴がある
// actionを返す関数のことを"Actioncreator"と呼ぶ

// redux thunk
// redux thunk ミドルウェアを使うことで、actioncreatorが、actionの代わりに関数を返すことができるようになる
import axios from 'axios'
export const READ_EVENTS = 'READE_VENTS'
export const CREATE_EVENT = 'CREATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'
export const READ_EVENT = 'READ_EVENT'
export const UPDATE_EVENT = 'UPDATE_EVENT'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    dispatch({ type: READ_EVENTS, response }) // reducerに渡す。これにより、actionはtype, responseのkeyをもつ
}

export const postEvent = values => async dispatch => {
    const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
    dispatch({ type: CREATE_EVENT, response }) // reducerに渡す。これにより、actionはtype, responseのkeyをもつ
}

export const getEvent = id => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
    dispatch({ type: READ_EVENT, response })
}

export const deleteEvent = id => async dispatch => {
    await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
    dispatch({ type: DELETE_EVENT, id }) // reducerに渡す。これにより、actionはtype, responseのkeyをもつ
}

export const putEvent = values => async dispatch => {
    const response = await axios.put(`${ROOT_URL}/events/${values.id}${QUERYSTRING}`, values)
    dispatch({ type: UPDATE_EVENT, response })
}