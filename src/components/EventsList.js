import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class EventsList extends React.Component {
  renderListOfEvents(event) {
    return <li key={event.name}>
      <Link
        to={`/events/${event.id}`}>{event.name}
      </Link>
    </li>
  }

  render() {
    return (
      <div className="events-list">
        <h1>Events list</h1>
        {!this.props.events && 'Loading...'}

        {
          this.props.events
          &&
          <ul>{this.props.events.map(this.renderListOfEvents)}</ul>
        }

      </div>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps)(EventsList)