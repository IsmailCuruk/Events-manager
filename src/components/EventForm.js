import React from 'react'
import { connect } from 'react-redux'

import { createEvent } from '../actions/createEvent'


class EventForm extends React.Component {
  render() {
    console.log("EventForm Props test", this.props)
    return (
      <form onSubmit={this.props.onSubmit}>
        <label>
          Event name:
          <input
            type="text"
            onChange={this.props.onChange}
            value={this.props.values.name}
            name="name"
          />
        </label>

        <label>
          Date:
        <input
            type="text"
            onChange={this.props.onChange}
            value={this.props.values.date}
            name="date"
            />
        </label>

        <label>
          Description:
        <input
            type="text"
            onChange={this.props.onChange}
            value={this.props.values.description}
            name="description"
            />
        </label>
        <input type="submit" value="Submit" />  
      </form>
    )
  }
}

export default connect(null, {createEvent})(EventForm)