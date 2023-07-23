import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      password: this.state.password,
    };

    axios.post('http://localhost:4000/users/add', newUser)
         .then(res => console.log(res.data))
         .catch(err => console.log(err));

    this.setState({
      email: '',
      password: '',
    })
  }

  render() {
    return (
      <div className="container">
        <h3 className="title">User Signup</h3>
        <form onSubmit={this.onSubmit} className="form">
          <div className="form-group">
            <label>Email: </label>
            <input type="email" 
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input type="password" 
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
              />
          </div>
          <div className="form-group">
            <input type="submit" value="Signup" className="submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default App;