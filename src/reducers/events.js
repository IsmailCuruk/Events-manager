import { EVENTS_FETCHED } from '../actions/events'
import { EVENT_CREATE_SUCCESS } from '../actions/createEvent'
import { EVENT_DELETE_SUCCESS } from '../actions/deleteEvent'

const initialState = null

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case EVENTS_FETCHED:
      return action.events;
    case EVENT_CREATE_SUCCESS:
      return [
        ...state,
        action.event
      ];
    case EVENT_DELETE_SUCCESS:
      return state.events.filter(event => {
        return event.id !== action.event.id
      });
    default:
      return state;
  }
}
