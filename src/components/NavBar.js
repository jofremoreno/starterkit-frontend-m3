import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import GeoIcon from '../img/navbar_icons_geo.svg';
import SearchIcon from '../img/navbar_icons_search.svg';
import MessageIcon from '../img/navbar_icons_message.svg';
import FavsIcon from '../img/navbar_icons_favs.svg';
import ProfileIcon from '../img/navbar_icons_profile.svg';

const NavBarInferior = () => {
  return (
    <div className="nav-container">
      <ul>
        <li>
          <Link to={'./geolocation'} className="link-decorate">
            <img src={GeoIcon} className="nav-icons" alt="geolocation-icon"></img>
          </Link>
        </li>
        <li>
          <Link to={'./search'} className="link-decorate">
            <img src={SearchIcon} className="nav-icons" alt="geolocation-icon"></img>
          </Link>
        </li>
        {/* <li>
          <Link to={'./messages'} className="link-decorate">
            <img src={MessageIcon} className="nav-icons nav-message" alt="geolocation-icon"></img>
          </Link>
        </li> */}
        <li>
          <Link to={'./favs'} className="link-decorate">
            <img src={FavsIcon} className="nav-icons" alt="geolocation-icon"></img>
          </Link>
        </li>
        <li>
          <Link to={'./profile'} className="link-decorate">
            <img src={ProfileIcon} className="nav-icons" alt="geolocation-icon"></img>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBarInferior;
