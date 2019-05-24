import request from 'superagent'

export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'

const baseUrl = 'http://localhost:4000'

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
})

export const createEvent = (data) => dispatch => {
  request
    .post(`${baseUrl}/events`)
    .send(data) //where does data come from: from the parameter
    .then(response => {
      dispatch(eventCreateSuccess(response.body))
    })
    .catch(console.error)
}