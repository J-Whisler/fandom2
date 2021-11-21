import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <Link to="/" className="nav__logoText">
          FANDOM
        </Link>
      </div>
      <div className="nav__links">
        <Link to="/" className="nav__linksLink link__home">
          HOME
        </Link>
        <div className="nav__linksDivider"></div>
        <Link to="/all" className="nav__linksLink link__all">
          All
        </Link>
        <div className="nav__linksDivider"></div>

        <Link to="/mlb" className="nav__linksLink link__mlb">
          MLB
        </Link>
        <div className="nav__linksDivider"></div>

        <Link to="/nba" className="nav__linksLink link__nba">
          NBA
        </Link>
        <div className="nav__linksDivider"></div>

        <Link to="/nfl" className="nav__linksLink link__nfl">
          NFL
        </Link>
        <div className="nav__linksDivider"></div>

        <Link to="/nhl" className="nav__linksLink link__nhl">
          NHL
        </Link>
        <div className="nav__linksDivider"></div>

        <Link to="/addpost" className="nav__linksLink link__addpost">
          ADD POST
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
