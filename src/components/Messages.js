import React, { Component } from 'react';
import NavBar from './NavBar';
import './navbar.css';

class Messages extends Component {
  render() {
    return (
      <div>
        <h1>Messages:</h1>
        <NavBar>{NavBar}</NavBar>
      </div>
    );
  }
}

export default Messages;
