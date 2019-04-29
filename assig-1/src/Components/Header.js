import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzEAkontikEK8uPVKH_RRSyPTRz0gZIKMNuiQRXsTb0r_EH-YElQ"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
          Makinahgram
        </a>
        <form class="form-inline">
          <Link
            to="/Home"
            class="btn btn-sm btn-outline-secondary"
            type="button"
          >
            Home
          </Link>
          <Link to="/2" class="btn btn-sm btn-outline-secondary" type="button">
            myAccount
          </Link>
        </form>
      </nav>
    );
  }
}

export default Header;
