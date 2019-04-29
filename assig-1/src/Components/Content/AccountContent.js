import React, { Component } from "react";
import Axios from "axios";
import "./Account.css";

class AccountContent extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    Axios.get(`https://makinahgram-api.herokuapp.com/users/${id} `).then(
      res => {
        this.setState({ user: res.data });
      }
    );
  }
  render() {
    if (this.state.user) {
      return (
        <React.Fragment>
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
              <li>50</li>
              <li>posts</li>
            </ul>
          </div>
          <div className="row1">
            {this.state.user.posts.map(post => (
              <div className="ul1">
                <ul>
                  <li className="name">{post.name}</li>
                  <li className="date">{post.created_at}</li>
                  <li>
                    <img className="girl" src={post.image} alt="" />
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </React.Fragment>
      );
    } else {
      return <h1>Loading..</h1>;
    }
  }
}

export default AccountContent;
