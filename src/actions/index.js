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
export const CREATE_EVENTS = 'CREATE_EVENTS'
export const DELETE_EVENT = 'DELETE_EVENT'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    console.log(response)
    dispatch({ type: READ_EVENTS, response }) // reducerに渡す。これにより、actionはtype, responseのkeyをもつ
}

export const postEvent = values => async dispatch => {
    const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
    console.log(response)
    dispatch({ type: CREATE_EVENTS, response }) // reducerに渡す。これにより、actionはtype, responseのkeyをもつ
}

export const deleteEvent = id => async dispatch => {
    await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
    dispatch({ type: DELETE_EVENT, id }) // reducerに渡す。これにより、actionはtype, responseのkeyをもつ
}