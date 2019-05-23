import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import EventsList from './components/EventsList'
import EventsListContainer from './components/EventsListContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={EventsListContainer} />
          {/* <Route path="/events/:id" component={EventsList} /> */}
        </div>
      </Provider>
    );
  }
}

export default App;