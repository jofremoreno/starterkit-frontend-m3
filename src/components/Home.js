import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
      <div className="HomePage" src="../img/Recurso 4_ok.png">
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
