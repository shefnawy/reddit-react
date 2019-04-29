import React, { Component } from "react";
import Axios from "axios";
import "./Account.css";

class AccountContent extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    Axios.get(`https://makinahgram-api.herokuapp.com/users/:${id} `).then(
      res => {
        this.setState({ user: res.data });
      }
    );
  }
  render() {
    if (this.state.user) {
      return (
        <div className="info">
          <p>{this.state.user.name}</p>
        </div>
      );
    } else {
      return <h1>Loading..</h1>;
    }
  }
}

export default AccountContent;
