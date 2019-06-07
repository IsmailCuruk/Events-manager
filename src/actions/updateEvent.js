import request from 'superagent'

export const EVENT_UPDATE_SUCCESS = 'EVENT_UPDATE_SUCCESS'

const baseUrl = 'http://localhost:4000'

const eventUpdateSuccess = event => ({
  type: EVENT_UPDATE_SUCCESS,
  event
})

export const updateEvent = (id, data) => (dispatch, getState) => {
  const url =`${baseUrl}/events/${id}`
  request
    .patch(url)
    .send(data) //where does data come from: from the parameter
    .then(response => {
      const state = getState()
      console.log('respons.ebody test', response.body)
      console.log('loggin state', state)
      const action = eventUpdateSuccess(response.body)
      dispatch(action)
    })
    .catch(console.error)
}