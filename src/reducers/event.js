import { EVENT_FETCHED } from '../actions/event'

const initialState = {}

export default function reducer(state = initialState, action) {
  switch (action.type) 
  {
    case EVENT_FETCHED:
      return action.event;
    default:
      return state;
  }
}