import React, { Component } from 'react';
// import PropTypes from 'prop-types';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) { // 初期化処理
    super(props)
    this.state = { count: 0 }
  }

   handlePlusButton = () => {
     // setStateが実行されるとrenderが実行される
     this.setState({ count: this.state.count + 1 })
   }

   handleMinusButton = () => {
     this.setState({ count: this.state.count - 1 })
   }

  render() {
    // console.log(this.state.count)
    // console.log("render")
    return (
      <React.Fragment>
        <div>counter: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

// User.defaultProps = {
//   age: 1
// }

// 受け取るpropatyの値がぶれないようにあらかじめ設定しておく
// User.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired
// }

export default App;
