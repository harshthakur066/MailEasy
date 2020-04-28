import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper" style={{ backgroundColor: "#383a3d" }}>
          <a href="/" className="brand-logo" style={{ paddingLeft: 10 }}>
            Emalisy
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="/auth/google">Signin With Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
