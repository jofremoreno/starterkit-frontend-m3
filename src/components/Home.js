import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
// import logo from'../img/Recurso 4.png'

const Home = () => {
  return (
    <div className="HomePage">
      {/* <div className="logo"><img src={logo}></img></div> */}
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
