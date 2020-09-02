import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment, decrement, changename } from '../actions/index.js'
// import PropTypes from 'prop-types';

// const App = () => (<Counter></Counter>)

class App extends Component {
  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div>counter: { props.value }</div>
        <button onClick={ props.increment }>+1</button>
        <button onClick={ props.decrement }>-1</button>
        <button onClick={ props.changename }>{ props.name }</button>
      </React.Fragment>
    )
  }
}

// stateとactionをcomponentに関連付ける部分
//
// mapStateToProps
// stateの情報から、このcomponentで必要なものを取り出して、component内のpropsとしてマッピングする機能をもつ関数
// 引数にはstate どういったオブジェクトをpropsとして対応させるのかということを関数の戻り値として定義

const mapStateToProps = state => ({ 
  value: state.count.value,
  name: state.name.name
})

// dispatchをしてactionをstoreに送る？
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  changename: () => dispatch(changename())
})

// mapDispatchToPropsは下記のように省略することが可能
// const mapDispatchToProps = ({ increment, decrement })


export default connect(mapStateToProps, mapDispatchToProps)(App)


// User.defaultProps = {
//   age: 1
// }

// 受け取るpropatyの値がぶれないようにあらかじめ設定しておく
// User.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired
// }