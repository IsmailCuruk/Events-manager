import React from 'react'
import {connect} from 'react-redux'
import {createEvent} from '../actions/createEvent'
import EventForm from './EventForm'

class EventFormContainer extends React.Component {
  state = {
    name: '',
    date: '',
    description: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    console.log("OnSubmit test")
    event.preventDefault()
    this.props.createEvent(this.state)
    this.setState({
      name: '',
      date: '',
      description: ''
    })
  }

  render() {
    return (
    <EventForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

export default connect(null, {createEvent})(EventFormContainer)