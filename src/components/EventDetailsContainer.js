import React from 'react'
import { connect } from 'react-redux'
import EventDetails from './EventDetails'
import { loadEvent, updateEvent } from '../actions/event'
import { deleteEvent } from '../actions/deleteEvent'

class EventDetailsContainer extends React.Component {
  componentDidMount() {
    const URLparam = this.props.match.params.id
    const URLnumber = Number(URLparam)
    this.props.loadEvent(URLnumber)
  }
  onDelete = () => {
    this.props.deleteEvent(this.props.event.id)
    this.props.history.push('/')
  }


  render() {
    return (<EventDetails
      onDelete={this.onDelete}
      event={this.props.event}
    />)
  }
}

const mapStateToProps = state => ({
  event: state.event
})

export default connect(mapStateToProps, { loadEvent, deleteEvent })(EventDetailsContainer)