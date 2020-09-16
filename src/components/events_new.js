import React, { Component } from 'react';
import { connect } from 'react-redux'
// import _ from 'lodash'
import  { Field, reduxForm } from 'redux-form'
import { Link }　from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import { postEvent } from '../actions/index.js'

class EventsNew extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this) // onsubmitを上書き？（自分の推測）
  }
  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field // 1回でもformを触ったらtouched状態になる。

    return (
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      />
    )
  }

  async onSubmit(values) {
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props // このpropsがなんなのか、良くわからない。
    // submittingはsubmitボタンを押したらtrueになる
    const style = { margin: 12 }

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        
        <Field label="Title" name="title" type="text" component={this.renderField} />
        <Field label="Body" name="body" type="text" component={this.renderField} />
        
        <RaisedButton label="Submit" type="submit" style={style} disabled={pristine || submitting || invalid} />
        <RaisedButton label="Cancel" style={style} containerElement={<Link to="/" />} />
      </form>
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

const mapDispatchToProps = ({ postEvent })

const validate = values => {
  const errors = {}
  if (!values.title) errors.title = "Enter a title, please"
  if (!values.body) errors.body = "Enter a body, please"
  return errors
}

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
)