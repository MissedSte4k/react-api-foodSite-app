import React, { Component, Children } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

class DishIngredients extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: {} };
  }

  componentDidMount() {
    var path = window.location.pathname.split("/");

    var str = "http://localhost:8080/dishes/" + path[2] + "/ingredients";
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
      <div class="row">
        <table class="Ingredients col-6">
          <th class="col-6">Amount</th>
          <th class="col-6">Pavadinimas</th>
          {posts.length ? posts.map(post => this.elem(post)) : null}
        </table>
      </div>
    );
  }

  elem(post) {
    return (
      <tr>
        <td>{post.Amount}</td>
        <td>{post.Name}</td>
      </tr>
    );
  }
}

export default DishIngredients;
