import React, { Component } from 'react';
import { connect } from 'react-redux'
import  { Field, reduxForm } from 'redux-form'
import { Link }　from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import { getEvent , deleteEvent, putEvent } from '../actions/index.js'

class EventsShow extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this) // onsubmitを上書き？（自分の推測）
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  componentDidMount() {
    const { id } = this.props.match.params
    if (id) this.props.getEvent(id)
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
    await this.props.putEvent(values)
    this.props.history.push('/')
  }

  async onDeleteClick() {
    const { id } = this.props.match.params
    await this.props.deleteEvent(id)
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
        <RaisedButton label="Delete" style={style} onClick={this.onDeleteClidk} />
      </form>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id]
  return { initialValues: event, state } // 初期状態がinitialValues
}

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
//   readEvents: () => dispatch(readEvents)
// })
//
// mapDispatchToPropsは下記のように省略することが可能

const mapDispatchToProps = ({ deleteEvent, getEvent, putEvent })

const validate = values => {
  const errors = {}
  if (!values.title) errors.title = "Enter a title, please"
  if (!values.body) errors.body = "Enter a body, please"
  return errors
}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true })(EventsShow)
)