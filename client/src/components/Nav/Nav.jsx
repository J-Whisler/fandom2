import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <Link className="nav__logoText">FANDOM</Link>
      </div>
      <div className="nav__links">
        <Link to="/" className="nav__linksLink link__home">
          Home
        </Link>
        <Link to="/all" className="nav__linksLink link__all">
          All
        </Link>
        <Link to="/mlb" className="nav__linksLink link__mlb">
          MLB
        </Link>
        <Link to="/nba" className="nav__linksLink link__nba">
          NBA
        </Link>
        <Link to="/nfl" className="nav__linksLink link__nfl">
          NFL
        </Link>
        <Link to="/nhl" className="nav__linksLink link__nhl">
          NHL
        </Link>
      </div>
      <div className="nav__social">
        <i className="fab fa-reddit"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
      </div>
    </div>
  );
};

export default Nav;
