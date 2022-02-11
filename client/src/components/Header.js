import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav-wrapper">
          <a href="" className="left brand-logo">
            Emaily
          </a>
          <ul className="">
            <li>
              <a> Login with google </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
