import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class WriteComment extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  render() {
    const { posts } = this.state;
    return (
      <div class="container">
        <div class="row">
          <div class="col-12 align-self-center">
            <div class="input-group mb-3 ">
              <input
                type="text"
                class="form-control align-self-center"
                placeholder="Comment"
                aria-label="Comment"
                aria-describedby="basic-addon2"
                id="CommentSubmit"
              />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleSubmit(data) {
    return fetch("http://localhost:8080/comment", {
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

export default WriteComment;
