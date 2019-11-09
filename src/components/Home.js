import React from 'react';
import { Link } from 'react-router-dom';
import home from './home.css'

const Home = () => {
  return (
    <div>
      <Link to={'/login'} >Login</Link>
      <Link to={'/signup'} >Signup</Link>
    </div>
  );
}

export default Home;