import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    const numItemsToGenerate = 20;
    const numImagesAvailable = 242;
    const cnt = 0;
  }

  renderItem(randomNumber) {
    fetch(`https://source.unsplash.com/400x400/?food/?sig${randomNumber}`).then(
      response => {
        let item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = `<img class="text-center" src="${response.url}" alt="food image"/>`;
        document.body.appendChild(item);
      }
    );
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/dishes")
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { posts } = this.state;
    return (
      <table>{posts.length ? posts.map(post => this.elem(post)) : null}</table>
    );
  }

  elem(post) {
    return (
      <tr>
        <td>
          <Link
            to={{ pathname: "/dishes/" + post.Id }}
            id={post.Id}
            class="col-sm-12"
          >
            {post.Name}
          </Link>
        </td>
        <td>
          <img
            src="https://source.unsplash.com/400x400/?food/?sig@(post.Id)"
            class="img-fluid"
            alt="Responsive image"
          />
        </td>
      </tr>
    );
  }
}

export default PostList;
