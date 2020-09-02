// これはactionを定義して、actionをreturnする関数。つまり、actioncreatorを定義した。
// 「あるイベントをつかんだ時に、当該のactioncreatorをimportして、適切な状態遷移を実行させるための
// 仕組みを行っている」と理解しておく
// actionとはjavascriptのオブジェクトのこと
// typeというkeyと、typeに対応する値を持つという特徴がある
// actionを返す関数のことを"Actioncreator"と呼ぶ

// 
// export const increment = () => {
//     return {
//         type: 'INCREMENT'
//     }
// }
// 下記のように省略可能(returnはカッコをつけて省略できる？)

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const CHANGENAME = 'CHANGENAME'

export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})

export const changename = () => ({
    type: CHANGENAME
})