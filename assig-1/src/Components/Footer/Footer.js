import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid bg-light">
        <footer>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link to="/Home" className="nav-link active text-dark" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/2" className="nav-link text-dark" href="#">
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
