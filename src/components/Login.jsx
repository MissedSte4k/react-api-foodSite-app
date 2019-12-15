import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  render() {
    const { posts } = this.state;
    return (
      <form
        name="login_post"
        className="form-horizontal"
        onSubmit={this.handleSubmit}
      >
        <div class="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input class="form-control" id="Username" placeholder="Username" />
          <small id="emailHelp" class="form-text text-muted"></small>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="Password"
              placeholder="Password"
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }

  handleSubmit(data) {
    return fetch("http://localhost:8080/signin", {
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

export default Login;
