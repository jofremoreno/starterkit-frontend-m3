import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import PrivateView from './views/PrivateView';
import Login from './views/auth/Login';
import Signup from './views/auth/Signup';
import { withAuth } from './Context/AuthContext';

import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';

import ApiWeather from './ApiWeather';

import Home from './components/Home'
import Geolocation from './components/Geolocation';
import Search from './components/Search';
import Favs from './components/Favs';
import Messages from './components/Messages';
import Profile from './components/Profile';



class App extends Component {
  render() {
    const { handleLogout } = this.props;
    return (
      <>
        {/* <button onClick={handleLogout}>logout</button> */}
        <Router>
          <AnonRoute exact path="/" component={Home} />
          <AnonRoute exact path="/login" component={Login} />
          <AnonRoute exact path="/signup" component={Signup} />
          <PrivateRoute exact path="/private" component={PrivateView} />
          <PrivateRoute exact path="/geolocation" component={Geolocation} />
          <PrivateRoute exact path="/search" component={Search} />
          <PrivateRoute exact path="/favs" component={Favs} />
          <PrivateRoute exact path="/messages" component={Messages} />
          <PrivateRoute exact path="/profile" component={Profile} />
        </Router>
      </>
    );
  }
}


export default withAuth(App);
