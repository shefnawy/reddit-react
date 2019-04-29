import React, { Component } from "react";
import { Link } from "@reach/router";

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
          <button
            component={Link}
            raised
            to="/Home"
            class="btn btn-sm btn-outline-secondary"
            type="button"
          >
            Home
          </button>
          <button
            component={Link}
            raised
            to="/myAccount"
            class="btn btn-sm btn-outline-secondary"
            type="button"
          >
            myAccount
          </button>
        </form>
      </nav>
    );
  }
}

export default Header;
