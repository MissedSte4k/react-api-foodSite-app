import React, { Component, Children } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

class DishComments extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: {} };
  }

  componentDidMount() {
    var path = window.location.pathname.split("/");

    var str = "http://localhost:8080/comments/" + path[2];
    console.log(str);
    axios
      .get(str)
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    console.log(this.props);

    const { posts } = this.state;
    return (
      <div class="Comment-weapped">
        <div class="container">
          {posts.length ? posts.map(post => this.elem(post)) : null}
        </div>
      </div>
    );
  }

  elem(post) {
    return (
      <div class="row">
        <div class="col-sm-12 bg-secondary">
          <p class="bg-dark text-white m-0 text-left">{post.Date}</p>
          <p class="bg-dark text-white">{post.Text}</p>
        </div>
        <div>
          <p class="row">. </p>
        </div>
      </div>
    );
  }
}

export default DishComments;
