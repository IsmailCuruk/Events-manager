import React from 'react'
import { connect } from 'react-redux'
import EventDetails from './EventDetails'
import { loadEvent } from '../actions/event'
import { deleteEvent } from '../actions/deleteEvent'
import { updateEvent } from '../actions/updateEvent'
import EventForm from '../components/EventForm'

class EventDetailsContainer extends React.Component {
  state = { editMode: false }

  onEdit = () => {
    // intialize editing mode:
    // set the starting value of the fields to the event details
    console.log('logging the event prop from EventDetailsContainer', this.props.event)
    this.setState({
      editMode: true,
      formValues: {
        name: this.props.event.name,
        date: this.props.event.date,
        description: this.props.event.description
      }
    })
  }

  onChange = (event) => {
    // update the formValues property with the new data from the input field
    this.setState({
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value
      }
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({ ...this.state,
      editMode: false
    })
    this.props.updateEvent(this.props.event.id, this.state.formValues)
  }

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
    if (this.state.editMode === false) {
    return (<EventDetails
      onDelete={this.onDelete}
      event   ={this.props.event}
      editMode={this.editMode}
      onEdit  ={this.onEdit}
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      formValues= {this.state.formValues}/>
      )}
    else {
      return (<EventForm
        values={this.state.formValues}
        onChange={this.onChange}
        editMode={this.editMode}
        onEdit  ={this.onEdit}
        onSubmit={this.onSubmit}
      />)
    }
  }
}

const mapStateToProps = state => ({
  event: state.event
})

export default connect(mapStateToProps, { loadEvent, deleteEvent, updateEvent })(EventDetailsContainer)