import React, { useContext } from "react";
import { Context as AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";
import Payment from "./Payment";

const Header = () => {
  const { state } = useContext(AuthContext);
  // console.log("state", state);

  const renderContent = () => {
    switch (state) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key={1}>
            <Payment />
          </li>,
          <li key={2}>
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  };

  return (
    <nav>
      <div className="nav-wrapper" style={{ backgroundColor: "#383a3d" }}>
        <Link
          to={state ? "/surveys" : "/"}
          className="brand-logo"
          style={{ paddingLeft: 10 }}
        >
          MailEasy
        </Link>
        <ul className="right hide-on-med-and-down">{renderContent()}</ul>
      </div>
    </nav>
  );
};

export default Header;
