import React, { Component } from "react";
import axios from "axios";

class CreatePost extends Component {
  state = {
    image: ""
  };

  handleChange = e => {
    this.setState({ image: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();

    const data = {
      user_id: 2,
      image: this.state.image
    };
    axios
      .post(`https://makinahgram-api.herokuapp.com/posts`, data)
      .then(res => {
        this.props.getPost();
        this.setState({ image: "" });
      })
      .catch(Error => console.log(Error));
  };

  render() {
    return (
      <form className="input-group mb-3" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter image URL"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={this.state.image}
          onChange={this.handleChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            Post
          </button>
        </div>
      </form>
    );
  }
}

export default CreatePost;
