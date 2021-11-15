import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./AllPosts.scss";
import axios from "axios";
import PostCard from "../../components/PostCard/PostCard";

const AllPosts = () => {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2323/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <div className="all">
      <div className="all__header">
        <div className="header__title">
          <h4>All Posts</h4>
        </div>
        <div className="header__filter">
          <h5>Filter by Sport:</h5>
          <div className="header__icons">
            <Link to="/mlb">
              <i className="fas fa-baseball-ball"></i>
            </Link>
            <Link to="/nba">
              <i className="fas fa-basketball-ball"></i>
            </Link>
            <Link to="/nfl">
              <i className="fas fa-football-ball"></i>
            </Link>
            <Link to="/nhl">
              <i className="fas fa-hockey-puck"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="all__postList">
        {listOfPosts.map((post, key) => (
          <PostCard key={key} post={post} />
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
