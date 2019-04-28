import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import "./Footer.css";
import Home from "../../Home";
import MyAccount from "../../myAccount";

class Footer extends Component {
  render() {
    return (
      <div class="container-fluid bg-light">
        <footer>
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <Link to="/Home" class="nav-link active text-dark" href="#">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/myAccount" class="nav-link text-dark" href="#">
                MyAccount
              </Link>
            </li>
          </ul>
        </footer>

        <Router>
          <Home path="/Home" />
          <MyAccount path="/myAccount" />
        </Router>
      </div>
    );
  }
}

export default Footer;
