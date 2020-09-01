// actionとはjavascriptのオブジェクトのこと
// typeというkeyと、typeに対応する値を持つという特徴がある
// actionを返す関数のことを"ActionCreater"と呼ぶ

// 
// export const increment = () => {
//     return {
//         type: 'INCREMENT'
//     }
// }
// 下記のように省略可能(returnはカッコをつけて省略できる？)

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
    type: 'INCREMENT'
})

export const decrement = () => ({
    type: 'DECREMENT'
})