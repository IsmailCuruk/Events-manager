import { EVENT_FETCHED } from '../actions/event'
import { EVENT_UPDATE_SUCCESS } from '../actions/updateEvent'

const initialState = {}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case EVENT_FETCHED:
      return action.event;
    case EVENT_UPDATE_SUCCESS:
      return action.event;
    default:
      return state;
  }
}