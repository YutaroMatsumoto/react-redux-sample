import React, { Component } from 'react';
import { connect } from 'react-redux'
// import _ from 'lodash'
import { Link }　from 'react-router-dom'

// import { postEvent } from '../actions/index.js'

class EventsNew extends Component {
  render() {
    return (
      <React.Fragment>
        <div>foo</div>
      </React.Fragment>
    )
  }
}

// const mapStateToProps = state => ({ events: state.events })

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
//   readEvents: () => dispatch(readEvents)
// })
//
// mapDispatchToPropsは下記のように省略することが可能

// const mapDispatchToProps = ({ postEvent })


export default connect(null, null)(EventsNew)