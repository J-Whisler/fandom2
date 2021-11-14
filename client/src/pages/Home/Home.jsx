import React from "react";
import { Link } from "react-router-dom";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home__left">
        <p className="home__leftText">
          See the latest from around professional sports fellow
          <span> FANDOM</span> users. See all posts or filter by individual
          sports!
        </p>
      </div>
      <div className="home__right">
        <div className="home__rightCards">
          <div className="cards__top">
            <Link to="/all" className="card">
              <div className="card__background">
                <i className="fas fa-baseball-ball"></i>
                <i className="fas fa-basketball-ball"></i>
                <i className="fas fa-football-ball"></i>
                <i className="fas fa-hockey-puck"></i>
              </div>
              <div className="card__text">
                <h4 className="card__textLink">All Sports</h4>
              </div>
            </Link>
          </div>
          <div className="cards__bottom">
            <Link to="/mlb" className="card">
              <div className="card__background">
                <i className="fas fa-baseball-ball"></i>
              </div>
              <div className="card__text">
                <h4 className="card__textLink">MLB</h4>
              </div>
            </Link>
            <Link to="/nba" className="card">
              <div className="card__background">
                <i className="fas fa-basketball-ball"></i>
              </div>
              <div className="card__text">
                <h4 className="card__textLink">NBA</h4>
              </div>
            </Link>
            <Link to="/nfl" className="card">
              <div className="card__background">
                <i className="fas fa-football-ball"></i>
              </div>
              <div className="card__text">
                <h4 className="card__textLink">NFL</h4>
              </div>
            </Link>
            <Link to="/nhl" className="card">
              <div className="card__background">
                <i className="fas fa-hockey-puck"></i>
              </div>
              <div className="card__text">
                <h4 className="card__textLink">NHL</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
