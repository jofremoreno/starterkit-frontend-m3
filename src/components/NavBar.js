import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Link to={'./Search.js'}>Search</Link>
      <Link to={'./Favs.js'}>Favs</Link>
    </div>
  );
};

export default NavBar;