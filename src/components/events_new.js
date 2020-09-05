import React, { Component } from 'react';
import { connect } from 'react-redux'
// import _ from 'lodash'
import  { Field, reduxForm } from 'redux-form'
import { Link }　from 'react-router-dom'

import { postEvent } from '../actions/index.js'

class EventsNew extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this) // onsubmitを上書き？（自分の推測）
  }
  renderField(field) {
    console.log('renderfieldです')
    const { input, label, type, meta: { touched, error } } = field // 1回でもformを触ったらtouched状態になる。

    return (
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onSubmit(values) {
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props // このpropsがなんなのか、良くわからない。
    // submittingはsubmitボタンを押したらtrueになる

    // console.log('前前前前前前前前前前')
    // console.log(this.props)
    // console.log('後後後後後後後後後後')

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field label="Title" name="title" type="text" component={this.renderField} />
        <Field label="Body" name="body" type="text" component={this.renderField} />

        <div>
          <input type="submit" value="Submit" disabled={pristine || submitting}/>
          <Link to="/">Cancel</Link>
        </div>
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