import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const NavBarInferior = () => {
  return (
    <div className="nav-container">
          <ul>
            <li>
              <Link to={'./geolocation'} className="link-decorate">
                Home
              </Link>
            </li>
            <li>
              <Link to={'./search'} className="link-decorate">
                Search
              </Link>
            </li>
            <li>
              <Link to={'./messages'} className="link-decorate">
                Messages
              </Link>
            </li>
            <li>
              <Link to={'./favs'} className="link-decorate">
                Favs
              </Link>
            </li>
            <li>
              <Link to={'./profile'} className="link-decorate">Profile</Link>
            </li>
          </ul>
        </div>
  );
};

export default NavBarInferior;