import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./Content.css";
import "bootstrap/dist/css/bootstrap.css";
import CreatePost from "./CreatePost";

class HomeContent extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    Axios.get(`https://makinahgram-api.herokuapp.com/posts`)
      .then(res => {
        this.setState({ posts: res.data });
      })
      .catch(Error => console.log(Error));
  };

  render() {
    return (
      <div>
        <CreatePost post={this.getPosts} />
        {this.state.posts.map(post => {
          let date = new Date(post.created_at).toLocaleString();

          return (
            <React.Fragment>
              <article className="Post" ref="Post">
                <header>
                  <div className="Post-user">
                    <div className="Post-user-avatar">
                      <img src={post.user.thumbnail} alt={post.name} />
                    </div>
                    <div className="Post-user-nickname">
                      <Link className="text-dark" to={`/${post.user.id}`}>
                        {post.user.name}
                      </Link>
                    </div>
                  </div>
                </header>
                <div className="Post-image">
                  <div className="Post-image-bg">
                    <img alt="Icon Living" src={post.image} />
                  </div>
                </div>
                <div className="Post-caption  pl-5 ">
                  <span>Created at: {date}</span>
                </div>
              </article>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default HomeContent;
