import React, { Component } from 'react';
import NavBar from './NavBar';
import './navbar.css';
import './favs.css'

class Favs extends Component {
  render() {
    return (
      <div className="container">
        <h1>Favorites:</h1>
        <div class="fav-list">
          <p class="temp-text">
            Barcelona <span>12Cº</span>
          </p>
          <p class="temp-text">
            Madrid <span>9Cº</span>
          </p>
          <p class="temp-text">
            La habana <span>21.6Cº</span>
          </p>
          <p class="temp-text">
            London <span>10Cº</span>
          </p>
        </div>
        <NavBar>{NavBar}</NavBar>
      </div>
    );
  }
}

export default Favs;
