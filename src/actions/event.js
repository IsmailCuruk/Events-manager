import request from 'superagent'

export const EVENT_FETCHED = 'EVENT_FETCHED'

const baseUrl = 'http://localhost:4000'

const eventFetched = event => ({
  type: EVENT_FETCHED,
  event: event
})

export const loadEvent = (id) => (dispatch, getState) => {
  const event = getState().event
  // console.log('event', event)

  if (event && event.id === id) {
    return event
  } else {
    const url = `${baseUrl}/events/${id}`

    request(url)
      .then(response => {
        // console.log("response.body test:", response.body)
        const action = eventFetched(response.body)
        dispatch(action)
      })
      .catch(console.error)
  }
}