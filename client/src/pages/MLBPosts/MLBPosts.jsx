import React, { useState, useEffect } from "react";
import "./MLBPosts.scss";
import axios from "axios";

import PostCard from "../../components/PostCard/PostCard";

const MLBPosts = () => {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [sortBy, setSortBy] = useState(true);
  const [mlbFilter, setMlbFilter] = useState(true);
  const [mlbConferenceFilter, setMlbConferenceFilter] = useState(0);
  const [mlbDivisionFilter, setMlbDivisionFilter] = useState(0);
  const [mlbTeamFilter, setMlbTeamFilter] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:2323/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  const mlbPosts = listOfPosts.filter((post) => post.league === "MLB");

  const handleMlbClick = () => {
    setMlbFilter(true);
    setMlbConferenceFilter(0);
    setMlbDivisionFilter(0);
    setMlbTeamFilter(0);
  };

  const handleMlbConferneceClick = (index) => {
    setMlbConferenceFilter(index);
    setMlbDivisionFilter(0);
    setMlbTeamFilter(0);
  };

  const handleMlbDivisionClick = (index) => {
    setMlbDivisionFilter(index);
    setMlbTeamFilter(0);
  };

  const handleMlbTeamClick = (index) => {
    setMlbTeamFilter(index);
  };

  return (
    <div className="mlbPosts">
      <div className="mlbPosts__header">
        <div className="mlbPosts__sortBy">
          <div className="sortBy__header">
            <h6>Sort By: </h6>
          </div>
          <div className="sortBy__options">
            <span
              onClick={() => setSortBy(true)}
              className={sortBy ? "newest" : ""}
            >
              Newest
            </span>
            <div className="sortBy__optionsDivider"></div>
            <span
              onClick={() => setSortBy(false)}
              className={!sortBy ? "oldest" : ""}
            >
              Oldest
            </span>
          </div>
        </div>
        <div className="mlbPosts__filterBy">
          <div className="filterBy__header">
            <h6>Filter By: </h6>
          </div>
          <div className="filterBy__options">
            <div className="filterBy__mlb">
              <span onClick={handleMlbClick} className={mlbFilter ? "mlb" : ""}>
                MLB
              </span>
            </div>
            {mlbFilter && (
              <div className="filterBy__mlbConference">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleMlbConferneceClick(1)}
                  className={mlbConferenceFilter === 1 ? "al" : ""}
                >
                  A.L.
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbConferneceClick(2)}
                  className={mlbConferenceFilter === 2 ? "nl" : ""}
                >
                  N.L.
                </span>
              </div>
            )}
            {mlbConferenceFilter !== 0 && (
              <div className="filterBy__mlbDivision">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleMlbDivisionClick(1)}
                  className={mlbDivisionFilter === 1 ? "east" : ""}
                >
                  East
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbDivisionClick(2)}
                  className={mlbDivisionFilter === 2 ? "central" : ""}
                >
                  Central
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbDivisionClick(3)}
                  className={mlbDivisionFilter === 3 ? "west" : ""}
                >
                  West
                </span>
              </div>
            )}
            {mlbFilter && mlbConferenceFilter === 1 && mlbDivisionFilter === 1 && (
              <div className="filterBy__mlbTeam">
                <div className="filterBy__optionsDivider"></div>
                <span>Blue Jays</span>
                <div className="filterBy__optionsDot"></div>
                <span>Orioles</span>
                <div className="filterBy__optionsDot"></div>
                <span>Rays</span>
                <div className="filterBy__optionsDot"></div>
                <span>Red Sox</span>
                <div className="filterBy__optionsDot"></div>
                <span>Yankees</span>
              </div>
            )}
            {mlbFilter && mlbConferenceFilter === 1 && mlbDivisionFilter === 2 && (
              <div className="filterBy__mlbTeam">
                <div className="filterBy__optionsDivider"></div>
                <span>Guardians</span>
                <div className="filterBy__optionsDot"></div>
                <span>Royals</span>
                <div className="filterBy__optionsDot"></div>
                <span>Tigers</span>
                <div className="filterBy__optionsDot"></div>
                <span>Twins</span>
                <div className="filterBy__optionsDot"></div>
                <span>White Sox</span>
              </div>
            )}
            {mlbFilter && mlbConferenceFilter === 1 && mlbDivisionFilter === 3 && (
              <div className="filterBy__mlbTeam">
                <div className="filterBy__optionsDivider"></div>
                <span>Angels</span>
                <div className="filterBy__optionsDot"></div>
                <span>Astros</span>
                <div className="filterBy__optionsDot"></div>
                <span>Athletics</span>
                <div className="filterBy__optionsDot"></div>
                <span>Mariners</span>
                <div className="filterBy__optionsDot"></div>
                <span>Rangers</span>
              </div>
            )}
            {mlbFilter && mlbConferenceFilter === 2 && mlbDivisionFilter === 1 && (
              <div className="filterBy__mlbTeam">
                <div className="filterBy__optionsDivider"></div>
                <span>Braves</span>
                <div className="filterBy__optionsDot"></div>
                <span>Marlins</span>
                <div className="filterBy__optionsDot"></div>
                <span>Mets</span>
                <div className="filterBy__optionsDot"></div>
                <span>Nationals</span>
                <div className="filterBy__optionsDot"></div>
                <span>Phillies</span>
              </div>
            )}
            {mlbFilter && mlbConferenceFilter === 2 && mlbDivisionFilter === 2 && (
              <div className="filterBy__mlbTeam">
                <div className="filterBy__optionsDivider"></div>
                <span>Brewers</span>
                <div className="filterBy__optionsDot"></div>
                <span>Cardinals</span>
                <div className="filterBy__optionsDot"></div>
                <span>Cubs</span>
                <div className="filterBy__optionsDot"></div>
                <span>Pirates</span>
                <div className="filterBy__optionsDot"></div>
                <span>Reds</span>
              </div>
            )}
            {mlbFilter && mlbConferenceFilter === 2 && mlbDivisionFilter === 3 && (
              <div className="filterBy__mlbTeam">
                <div className="filterBy__optionsDivider"></div>
                <span>Diamondbacks</span>
                <div className="filterBy__optionsDot"></div>
                <span>Dodgers</span>
                <div className="filterBy__optionsDot"></div>
                <span>Giants</span>
                <div className="filterBy__optionsDot"></div>
                <span>Padres</span>
                <div className="filterBy__optionsDot"></div>
                <span>Rockies</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mlbPost__list">
        {mlbPosts.map((post, key) => (
          <PostCard post={post} key={key} />
        ))}
      </div>
    </div>
  );
};

export default MLBPosts;
