import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../screens/Header';
import Footer from '../screens/Footer';
import NoMatch from '../screens/NoMatch';
import MainPage from '../screens/MainPage';
import LoginPage from '../screens/LoginPage';
import RegisterPage from '../screens/Register';
import JobList from '../screens/JobList';
import AlumniList from '../screens/AlumniList';

class App extends Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={MainPage} />
              <Route exact path='/loginpage' component={LoginPage} />
              <Route exact path='/registerpage' component={RegisterPage} />
              <Route exact path='/joblist' component={JobList} />
              <Route exact path='/alumnilist' component={AlumniList} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
