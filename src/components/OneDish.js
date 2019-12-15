import React, { Component, Children } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

class OneDish extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: {} };
  }

  componentDidMount() {
    var path = window.location.pathname.split("/");

    var str = "http://localhost:8080/dishes/" + path[2];
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
        <table class="table col-7 m-1">
          <tbody>
            <tr>
              <td>Name:</td>
              <td>{posts.Name}</td>
            </tr>
            <tr>
              <td>Description:</td>
              <td>{posts.Description}</td>
            </tr>
            <tr>
              <td>Cooking time:</td>
              <td>{posts.CookingTime}</td>
            </tr>
            <tr>
              <td>Recipe makes:</td>
              <td>{posts.RecipeMakes}</td>
            </tr>
          </tbody>
          Details:
          <tbody>
            <tr>
              <td>Calories:</td>
              <td>{posts.Calories}</td>
            </tr>
            <tr>
              <td>Carbs:</td>
              <td>{posts.Carbs}</td>
            </tr>
            <tr>
              <td>Fat:</td>
              <td>{posts.Fat}</td>
            </tr>
            <tr>
              <td>Protein:</td>
              <td>{posts.Protein}</td>
            </tr>
            <tr>
              <td>Fat:</td>
              <td>{posts.Fat}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Directions:</td>
              <td>{posts.Directions}</td>
            </tr>
          </tbody>
        </table>
        <div class="col-4 m-2">
          <img
            src="https://source.unsplash.com/400x400/?food/?sig@(post.Id)"
            class="img-fluid m-0"
            alt="Responsive image"
          />
        </div>
      </div>
    );
  }
}

export default OneDish;
