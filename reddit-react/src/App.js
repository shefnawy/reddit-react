import "./App.css";
import React, { Component } from "react";
import "./styles/main.css";
import Header from "./components/Header";
// import Post from "./components/Post";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Posts from "./components/Posts";

class App extends Component {
  state = {
    username: "",
    loggedIn: false,
    token: null
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.setState({ token });
    }
  }
  login = (e, data) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/login", {
        email: e.target.email.value,
        password: e.target.password.value
      })
      .then(res => {
        if (res.status === 200) {
          this.setState({ loggedIn: true, token: res.data.token });
          localStorage.setItem("token", res.data.token);
        }
      })

      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="app">
        <Header username={this.state.username} loggedIn={this.state.loggedIn} />
        <Switch>
          <Route
            exact
            path="/login"
            component={() => <Login login={this.login} />}
          />
          <Route exact path="/" component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default App;
