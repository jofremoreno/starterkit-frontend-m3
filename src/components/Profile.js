import React, { Component } from 'react';
import NavBar from './NavBar';
import './navbar.css';

class Profile extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
        <h1>Profile:</h1>
        <NavBar>{NavBar}</NavBar>
      </div>
    );
  }
}

export default Profile;