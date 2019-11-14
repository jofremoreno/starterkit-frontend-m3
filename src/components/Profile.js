import React, { Component } from 'react';
import NavBar from './NavBar';
import './navbar.css';
import Avatar from '../img/avatar.png';
import { withAuth } from '../Context/AuthContext';

class Profile extends Component {
  render() {
    const { handleLogout } = this.props;
    return (
      <div>
        <h1>Profile:</h1>
        <div>
          <img src={Avatar} alt="img-profile"></img>
        </div>
        <div>{this.props.user.username}</div>
        <button onClick={handleLogout}>logout</button>
        <NavBar>{NavBar}</NavBar>
      </div>
    );
  }
}

export default withAuth(Profile);
