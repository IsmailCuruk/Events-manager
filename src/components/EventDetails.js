import React from 'react'
import { connect } from 'react-redux'
import { loadEvent } from '../actions/event'
import { deleteEvent } from '../actions/deleteEvent'
import { updateEvent } from '../actions/updateEvent'


class EventDetails extends React.Component {
  renderDetails = () => {

    return <div>
      <h1>{this.props.event.name}</h1>
      <i>{this.props.event.date}</i>
      <p>{this.props.event.description}</p>
    </div>

  }
  render() {
    console.log('logging the props:', this.props)

    return (
      <div className='event-details'>
        {!this.props.event.name && 'Loading...'}

        {
          this.props.event.name
          &&
          this.renderDetails()
        }
        <div>
          <button onClick={this.props.onDelete}>
            Delete
          </button>
        </div>
        <div>
          <button onClick={this.props.onEdit}>
            Edit
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  event: state.event
})

export default connect(mapStateToProps, { loadEvent, deleteEvent, updateEvent })(EventDetails)