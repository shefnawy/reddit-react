import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzEAkontikEK8uPVKH_RRSyPTRz0gZIKMNuiQRXsTb0r_EH-YElQ"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            Makinahgram
          </a>
          <form className="form-inline">
            <Link
              to="/Home"
              className="btn btn-sm btn-outline-secondary text-dark"
              type="button"
            >
              Home
            </Link>
            <Link
              to="/2"
              className="btn btn-sm btn-outline-secondary text-dark"
              type="button"
            >
              myAccount
            </Link>
          </form>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
