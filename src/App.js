import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import EventFormContainer from './components/EventFormContainer'
import EventsListContainer from './components/EventsListContainer'
import EventDetailsContainer from './components/EventDetailsContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <div>
            <Route path="/" exact component={EventsListContainer} />
          </div>
          <div>
            <Route path="/" exact component={EventFormContainer} />
          </div>
          <Route path="/events/:id" component={EventDetailsContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;