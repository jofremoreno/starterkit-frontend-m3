import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../Context/AuthContext';
import './login.css';

class Login extends Component {
  state = {
    username: "",
    password: "",
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.handleLogin({
      username,
      password,
    })
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="login">
        <div className="form">
          <h1>Log in:</h1>
          <div className="inputs-form">
            <form onSubmit={this.handleFormSubmit}>
              <input type="text" name="username" placeholder="  User" value={username} onChange={this.handleChange} />
              <input type="password" name="password" placeholder="  Password" value={password} onChange={this.handleChange} />
              <input className="input-submit" type="submit" value="Login" />
            </form>
          </div>
          
          <p>
            Create an account if you don't have'it <Link to={'/signup'}>Sign Up</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default withAuth(Login);