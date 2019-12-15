import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  render() {
    const { posts } = this.state;
    return (
      <form
        name="register_post"
        className="form-horizontal"
        onSubmit={this.handleSubmit}
      >
        <div class="form-group">
          <label for="Email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="Email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="Password">Password</label>
          <input
            type="password"
            class="form-control"
            id="Password"
            placeholder="Password"
          />
        </div>
        <div class="form-group">
          <label for="Username">Username</label>
          <input
            type="Username"
            class="form-control"
            id="Username"
            placeholder="Username"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }

  handleSubmit(data) {
    return fetch("http://localhost:8080/users?", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res;
      })
      .catch(err => err);
  }
}

export default Register;
