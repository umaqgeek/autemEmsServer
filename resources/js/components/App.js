import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { PrivateRoute } from './PrivateRoute';

import Header from '../screens/Header';
import NoMatch from '../screens/NoMatch';
import MainPage from '../screens/MainPage';

class App extends Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={MainPage} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
