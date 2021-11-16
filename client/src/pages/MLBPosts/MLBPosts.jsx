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
                <span
                  onClick={() => handleMlbTeamClick(111)}
                  className={mlbTeamFilter === 111 ? "bluejays" : ""}
                >
                  Blue Jays
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(112)}
                  className={mlbTeamFilter === 112 ? "orioles" : ""}
                >
                  Orioles
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(113)}
                  className={mlbTeamFilter === 113 ? "rays" : ""}
                >
                  Rays
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(114)}
                  className={mlbTeamFilter === 114 ? "redsox" : ""}
                >
                  Red Sox
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(115)}
                  className={mlbTeamFilter === 115 ? "yankees" : ""}
                >
                  Yankees
                </span>
              </div>
            )}
            {mlbFilter && mlbConferenceFilter === 1 && mlbDivisionFilter === 2 && (
              <div className="filterBy__mlbTeam">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleMlbTeamClick(121)}
                  className={mlbTeamFilter === 121 ? "guardians" : ""}
                >
                  Guardians
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(122)}
                  className={mlbTeamFilter === 122 ? "royals" : ""}
                >
                  Royals
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(123)}
                  className={mlbTeamFilter === 123 ? "tigers" : ""}
                >
                  Tigers
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(124)}
                  className={mlbTeamFilter === 124 ? "twins" : ""}
                >
                  Twins
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(125)}
                  className={mlbTeamFilter === 125 ? "whitesox" : ""}
                >
                  White Sox
                </span>
              </div>
            )}
            {mlbFilter && mlbConferenceFilter === 1 && mlbDivisionFilter === 3 && (
              <div className="filterBy__mlbTeam">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleMlbTeamClick(131)}
                  className={mlbTeamFilter === 131 ? "angels" : ""}
                >
                  Angels
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(132)}
                  className={mlbTeamFilter === 132 ? "astros" : ""}
                >
                  Astros
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(133)}
                  className={mlbTeamFilter === 133 ? "athletics" : ""}
                >
                  Athletics
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(134)}
                  className={mlbTeamFilter === 134 ? "mariners" : ""}
                >
                  Mariners
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(135)}
                  className={mlbTeamFilter === 135 ? "rangers" : ""}
                >
                  Rangers
                </span>
              </div>
            )}
            {mlbFilter && mlbConferenceFilter === 2 && mlbDivisionFilter === 1 && (
              <div className="filterBy__mlbTeam">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleMlbTeamClick(211)}
                  className={mlbTeamFilter === 211 ? "braves" : ""}
                >
                  Braves
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(212)}
                  className={mlbTeamFilter === 212 ? "marlins" : ""}
                >
                  Marlins
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(213)}
                  className={mlbTeamFilter === 213 ? "mets" : ""}
                >
                  Mets
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(214)}
                  className={mlbTeamFilter === 214 ? "nationals" : ""}
                >
                  Nationals
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(215)}
                  className={mlbTeamFilter === 215 ? "phillies" : ""}
                >
                  Phillies
                </span>
              </div>
            )}
            {mlbFilter && mlbConferenceFilter === 2 && mlbDivisionFilter === 2 && (
              <div className="filterBy__mlbTeam">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleMlbTeamClick(221)}
                  className={mlbTeamFilter === 221 ? "brewers" : ""}
                >
                  Brewers
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(222)}
                  className={mlbTeamFilter === 222 ? "cardinals" : ""}
                >
                  Cardinals
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(223)}
                  className={mlbTeamFilter === 223 ? "braves" : ""}
                >
                  Cubs
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(224)}
                  className={mlbTeamFilter === 224 ? "pirates" : ""}
                >
                  Pirates
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(225)}
                  className={mlbTeamFilter === 225 ? "reds" : ""}
                >
                  Reds
                </span>
              </div>
            )}
            {mlbFilter && mlbConferenceFilter === 2 && mlbDivisionFilter === 3 && (
              <div className="filterBy__mlbTeam">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleMlbTeamClick(231)}
                  className={mlbTeamFilter === 231 ? "diamondbacks" : ""}
                >
                  Diamondbacks
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(232)}
                  className={mlbTeamFilter === 232 ? "dodgers" : ""}
                >
                  Dodgers
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(233)}
                  className={mlbTeamFilter === 233 ? "giants" : ""}
                >
                  Giants
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(234)}
                  className={mlbTeamFilter === 234 ? "padres" : ""}
                >
                  Padres
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(235)}
                  className={mlbTeamFilter === 235 ? "rockies" : ""}
                >
                  Rockies
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={sortBy ? "mlbPosts__list newest" : "mlbPosts__list oldest"}
      >
        {mlbPosts.map((post, key) => (
          <PostCard post={post} key={key} />
        ))}
      </div>
    </div>
  );
};

export default MLBPosts;
