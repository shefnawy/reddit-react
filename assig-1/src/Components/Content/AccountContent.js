import React, { Component } from "react";
import Axios from "axios";
import "./Account.css";
import "./Content.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

class AccountContent extends Component {
  state = {
    user: null,
    posts: []
  };

  componentDidMount() {
    this.accountPosts();
  }

  accountPosts = () => {
    const { id } = this.props.match.params;
    Axios.get(`https://makinahgram-api.herokuapp.com/users/${id} `).then(
      res => {
        this.setState({ user: res.data, posts: res.data.posts });
      }
    );
  };
  handleClick = id => {
    Axios.delete(`https://makinahgram-api.herokuapp.com/posts/${id}`)
      .then(res => {
        this.setState(previousState => ({
          posts: previousState.posts.filter(p => p.id !== id)
        }));
        this.accountPosts();
      })
      .catch(Error => console.log(Error));
  };

  render() {
    if (this.state.user) {
      return (
        <React.Fragment className="container-fluid">
          <div className="info">
            <img className="pp" src={this.state.user.thumbnail} />
            <p>{this.state.user.name}</p>
            <ul>
              <li>{this.state.user.followers}</li>
              <li>Followers</li>
            </ul>
            <ul>
              <li>{this.state.user.following}</li>
              <li>Following</li>
            </ul>
            <ul>
              <li>{this.state.user.posts.length}</li>
              <li>posts</li>
            </ul>
          </div>
          <div className="row1">
            {this.state.user.posts.map(post => {
              let date = new Date(post.created_at).toLocaleString();
              // let options = ()
              // date.toLocaleDateString();
              return (
                <div className="ul1 text-dark">
                  <ul>
                    <li>
                      <img src={this.state.user.thumbnail} alt="" />
                    </li>
                    <li className="text-dark font-weight-bold">
                      {this.state.user.name}
                    </li>

                    <li className="date pl-5">Created at: {date}</li>
                    <li>
                      <Link to="/Home">
                        <img className="girl" src={post.image} alt="" />
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <button
                        type="button"
                        className="btn btn-secondary mt-3"
                        onClick={() => this.handleClick(post.id)}
                      >
                        Delete post
                      </button>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </React.Fragment>
      );
    } else {
      return <h1>Loading..</h1>;
    }
  }
}

export default AccountContent;
