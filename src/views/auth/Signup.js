import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../Context/AuthContext';
import './signup.css';

class Signup extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.handleSignup({
      username,
      password,
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="signup">
        <div className="form">
          <h1>Sign up:</h1>
          <div className="inputs-form">
            <form onSubmit={this.handleFormSubmit}>
              <input type="text" name="username" placeholder="User" value={username} onChange={this.handleChange} />
              <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} />
              <input className="input-submit" type="submit" value="Signup" />
            </form>
          </div>

          <p>
            Already have account? <Link to={'/login'}> Login</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default withAuth(Signup);