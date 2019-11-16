import React, { Component } from 'react';
import NavBar from './NavBar';
import './navbar.css';
import Avatar from '../img/avatar1.jpg';
import { withAuth } from '../Context/AuthContext';
import './profile.css'

class Profile extends Component {
  render() {
    const { handleLogout } = this.props;
    return (
      <div className="container profile">
        <h1>Profile</h1>
        <div>
          <img src={Avatar} className="image-profile" alt="img-profile"></img>
        </div>
        <div className="name-profile">{this.props.user.username}</div>
        <div className="logout-button">
          <button onClick={handleLogout}>Logout</button>
        </div>
        <NavBar>{NavBar}</NavBar>
      </div>
    );
  }
}

export default withAuth(Profile);