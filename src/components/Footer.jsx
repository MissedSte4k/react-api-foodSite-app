import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  render() {
    const { posts } = this.state;
    return (
      <div class="jumbotron text-center m-0">
        <p>Made by simpas2 IFF-6/9</p>
      </div>
    );
  }
}

export default Footer;
