import React, { Component } from "react";
import axios from "axios";
import "./Content.css";

class DeletePost extends Component {
  state = {
    id: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .delete(`https://makinahgram-api.herokuapp.com/users/${this.state.id}`)
      .then(res => {
        this.props.accountPosts();
        this.setState({ id: event.target.value });
      })
      .catch(Error => console.log(Error));
  };

  render() {
    return (
      <button
        type="button"
        class="btn btn-secondary"
        onSubmit={this.handleSubmit}
      >
        Delete post
      </button>
    );
  }
}

export default DeletePost;
