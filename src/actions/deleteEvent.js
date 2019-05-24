import request from 'superagent'

export const EVENT_DELETE_SUCCESS = 'EVENT_DELETE_SUCCESS'

const baseUrl = 'http://localhost:4000'

const eventDeleteSuccess = event => ({
  type: EVENT_DELETE_SUCCESS,
  event,
})

export const deleteEvent = (id) => (dispatch, getState) => {
  const event = getState().event
  if (!event) { return event }
  else {
    const url = `${baseUrl}/events/${id}`
    request
      .delete(url)
      .then(response => {
        const action = eventDeleteSuccess(event)
        dispatch(action)
      })
      .catch(console.error)
  }
}