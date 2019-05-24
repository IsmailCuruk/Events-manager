import React from 'react'
import { connect } from 'react-redux'
import { loadEvent, updateEvent } from '../actions/event'
import { deleteEvent } from '../actions/deleteEvent'


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
      </div>
    )
  }
}

const mapStateToProps = state => ({
  event: state.event
})

export default connect(mapStateToProps, { loadEvent, deleteEvent })(EventDetails)