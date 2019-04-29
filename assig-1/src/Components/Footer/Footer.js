import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

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
              <Link to="/Account" class="nav-link text-dark" href="#">
                MyAccount
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default Footer;
