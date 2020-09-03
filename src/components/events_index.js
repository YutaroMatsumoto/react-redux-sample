import React, { Component } from 'react';
import { connect } from 'react-redux'
import { readEvents } from '../actions/index.js'
import _ from 'lodash'
// import PropTypes from 'prop-types';

// const App = () => (<Counter></Counter>)

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{ event.id }</td>
        <td>{ event.title }</td>
        <td>{ event.body }</td>
      </tr>
    ))
  //   return this.props.events.map(event => (
  //     <tr>
  //       <td>{ event.id }</td>
  //       <td>{ event.title }</td>
  //       <td>{ event.body }</td>
  //     </tr>
  //   ))
  }

  render() {
    // const props = this.props
    return (
      <React.Fragment>
        {/* <div>{ console.log(props.events) }</div> */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            { this.renderEvents() }
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

// stateとactionをcomponentに関連付ける部分
//
// mapStateToProps
// stateの情報から、このcomponentで必要なものを取り出して、component内のpropsとしてマッピングする機能をもつ関数
// 引数にはstate どういったオブジェクトをpropsとして対応させるのかということを関数の戻り値として定義

const mapStateToProps = state => ({ events: state.events })

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
//   readEvents: () => dispatch(readEvents)
// })
//
// mapDispatchToPropsは下記のように省略することが可能
const mapDispatchToProps = ({ readEvents })


export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)


// User.defaultProps = {
//   age: 1
// }

// 受け取るpropatyの値がぶれないようにあらかじめ設定しておく
// User.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired
// }