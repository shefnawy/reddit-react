import React, { Component } from "react";
import Axios from "axios";
import "./Content.css";

class Content extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    Axios.get(`https://makinahgram-api.herokuapp.com/posts`).then(res => {
      this.setState({ posts: res.data });
    });
  }
  render() {
    return (
      <div>
        {this.state.posts.map(post => (
          <article className="Post" ref="Post">
            <header>
              <div className="Post-user">
                <div className="Post-user-avatar">
                  <img src={post.user.thumbnail} alt={post.name} />
                </div>
                <div className="Post-user-nickname">
                  <span>{post.user.name}</span>
                </div>
              </div>
            </header>
            <div className="Post-image">
              <div className="Post-image-bg">
                <img alt="Icon Living" src={post.image} />
              </div>
            </div>
            <div className="Post-caption">
              <strong>{post.user.name}</strong>
              Created at: {post.created_at}
            </div>
          </article>
        ))}
      </div>
    );
  }
}

export default Content;
