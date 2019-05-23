import React from 'react'
import {connect} from 'react-redux'
import {loadEvent, updateEvent, deleteEvent} from '../actions/events'


class EventDetails extends React.Component {
  render() {
    return 
  }
}

const mapStateToProps = state => ({
  event: state.event
})

export default connect(mapStateToProps, {loadEvent})(EventDetails)