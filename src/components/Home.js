import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Logo from '../img/LOGO-WHITE_OK.svg';

const Home = () => {
  return (
    <div className="HomePage">
      <div className="logo">
        <img src={Logo} />
      </div>
      <div className="registerButons">
        <div className="auth-button auth-button__login">
          <Link to={'/login'} className="link-decorate-login">
            Login
          </Link>
        </div>
        <div className="auth-button auth-button__signup">
          <Link to={'/signup'} className="link-decorate-signup">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
