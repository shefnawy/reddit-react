import Post from "./Post";
import CreatePost from "./CreatePost";
import axios from "axios";
import React, { Component } from "react";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    axios
      .get("http://localhost:8080/api/posts", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(posts => {
        this.setState({ posts: posts.data.posts });
      })
      .catch(Error => console.log(Error));
  };

  addPost = data => {
    this.setState({ posts: [...this.state.posts, data] });
  };
  render() {
    return (
      <div>
        <CreatePost addPost={this.addPost} />
        {this.state.posts.length > 0
          ? this.state.posts.map(post => {
              return <Post post={post} />;
            })
          : "no posts yet"}
      </div>
    );
  }
}

export default Posts;
