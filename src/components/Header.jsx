import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Fire from "..";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  render() {
    const { posts } = this.state;
    return (
      <div class="jumbotron text-center">
        <h1>What to eat</h1>
        <li>
          <a href="http://www.republiquedesmangues.fr/">fire</a>
        </li>
      </div>
    );
  }
}

export default Header;
