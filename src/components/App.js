import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment, decrement } from '../actions/index.js'
// import PropTypes from 'prop-types';

// const App = () => (<Counter></Counter>)

class App extends Component {

  //
  // 下記2つの処理はreducerで実現しているのでいらない
  //  handlePlusButton = () => {
  //    // setStateが実行されるとrenderが実行される
  //    this.setState({ count: this.state.count + 1 })
  //  }

  //  handleMinusButton = () => {
  //    this.setState({ count: this.state.count - 1 })
  //  }

  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div>counter: { props.value }</div>
        <button onClick={ props.increment }>+1</button>
        <button onClick={ props.decrement }>-1</button>
      </React.Fragment>
    )
  }
}

// stateとactionをcomponentに関連付ける部分
//
// mapStateToProps
// stateの情報から、このcomponentで必要なものを取り出して、component内のpropsとしてマッピングする機能をもつ関数
// 引数にはstate どういったオブジェクトをpropsとして対応させるのかということを関数の戻り値として定義

const mapStateToProps = state => ({ value: state.count.value })

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

// mapDispatchToPropsは下記のように省略することが可能
const mapDispatchToProps = ({ increment, decrement })


export default connect(mapStateToProps, mapDispatchToProps)(App)


// User.defaultProps = {
//   age: 1
// }

// 受け取るpropatyの値がぶれないようにあらかじめ設定しておく
// User.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired
// }