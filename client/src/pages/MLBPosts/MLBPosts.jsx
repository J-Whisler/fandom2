import React, { useState, useEffect } from "react";
import "./MLBPosts.scss";
import axios from "axios";
import { Link } from "react-router-dom";

import PostCard from "../../components/PostCard/PostCard";

const MLBPosts = () => {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [sortBy, setSortBy] = useState(false);
  const [mlbFilter, setMlbFilter] = useState(true);
  const [mlbConferenceFilter, setMlbConferenceFilter] = useState(0);
  const [mlbDivisionFilter, setMlbDivisionFilter] = useState(0);
  const [mlbTeamFilter, setMlbTeamFilter] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:2323/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

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

  // Filters
  const mlbPostsList = listOfPosts.filter(
    (mlbPost) => mlbPost.league === "MLB"
  );
  // AL Posts
  const mlbAlPostsList = mlbPostsList.filter(
    (alPost) =>
      alPost.team === "Rays" ||
      alPost.team === "Red Sox" ||
      alPost.team === "Yankees" ||
      alPost.team === "Blue Jays" ||
      alPost.team === "Orioles" ||
      alPost.team === "Guardians" ||
      alPost.team === "Tigers" ||
      alPost.team === "Twins" ||
      alPost.team === "Royals" ||
      alPost.team === "White Sox" ||
      alPost.team === "Angels" ||
      alPost.team === "Astros" ||
      alPost.team === "Athletics" ||
      alPost.team === "Mariners" ||
      alPost.team === "Angels" ||
      alPost.team === "Rangers"
  );
  // AL Division Posts
  // AL East
  const mlbAlEastPostsList = mlbAlPostsList.filter(
    (alEastPost) =>
      alEastPost.team === "Blue Jays" ||
      alEastPost.team === "Orioles" ||
      alEastPost.team === "Rays" ||
      alEastPost.team === "Red Sox" ||
      alEastPost.team === "Yankees"
  );
  // AL Central
  const mlbAlCentralPostsList = mlbAlPostsList.filter(
    (alCentralPost) =>
      alCentralPost.team === "Guardians" ||
      alCentralPost.team === "Tigers" ||
      alCentralPost.team === "Twins" ||
      alCentralPost.team === "Royals" ||
      alCentralPost.team === "White Sox"
  );
  // AL West
  const mlbAlWestPostsList = mlbAlPostsList.filter(
    (alWestPost) =>
      alWestPost.team === "Angels" ||
      alWestPost.team === "Athletics" ||
      alWestPost.team === "Astros" ||
      alWestPost.team === "Mariners" ||
      alWestPost.team === "Rangers"
  );
  // AL East Teams
  const mlbBlueJaysPostsList = mlbAlEastPostsList.filter(
    (blueJaysPost) => blueJaysPost.team === "Blue Jays"
  );
  const mlbOriolesPostsList = mlbAlEastPostsList.filter(
    (oriolesPost) => oriolesPost.team === "Orioles"
  );
  const mlbRaysPostsList = mlbAlEastPostsList.filter(
    (raysPost) => raysPost.team === "Rays"
  );
  const mlbRedSoxPostsList = mlbAlEastPostsList.filter(
    (redSoxPost) => redSoxPost.team === "Red Sox"
  );
  const mlbYankeesPostsList = mlbAlEastPostsList.filter(
    (yankeesPost) => yankeesPost.team === "Yankees"
  );
  // AL Central Teams
  const mlbGuardiansPostsList = mlbAlCentralPostsList.filter(
    (guardiansPost) => guardiansPost.team === "Guardians"
  );
  const mlbTigersPostsList = mlbAlCentralPostsList.filter(
    (tigersPost) => tigersPost.team === "Tigers"
  );
  const mlbTwinsPostsList = mlbAlCentralPostsList.filter(
    (twinsPost) => twinsPost.team === "Twins"
  );
  const mlbRoyalsPostsList = mlbAlCentralPostsList.filter(
    (royalsPost) => royalsPost.team === "Royals"
  );
  const mlbWhiteSoxPostsList = mlbAlCentralPostsList.filter(
    (whiteSoxPost) => whiteSoxPost.team === "White Sox"
  );
  // AL West Teams
  const mlbAngelsPostsList = mlbAlWestPostsList.filter(
    (angelsPost) => angelsPost.team === "Angels"
  );
  const mlbAstrosPostsList = mlbAlWestPostsList.filter(
    (astrosPost) => astrosPost.team === "Astros"
  );
  const mlbAthleticsPostsList = mlbAlWestPostsList.filter(
    (athleticsPost) => athleticsPost.team === "Athletics"
  );
  const mlbMarinersPostsList = mlbAlWestPostsList.filter(
    (marinersPost) => marinersPost.team === "Mariners"
  );
  const mlbRangersPostsList = mlbAlWestPostsList.filter(
    (rangersPost) => rangersPost.team === "Rangers"
  );
  // NL Posts
  const mlbNlPostsList = mlbPostsList.filter(
    (nlPost) =>
      nlPost.team === "Braves" ||
      nlPost.team === "Marlins" ||
      nlPost.team === "Mets" ||
      nlPost.team === "Nationals" ||
      nlPost.team === "Phillies" ||
      nlPost.team === "Brewers" ||
      nlPost.team === "Cardinals" ||
      nlPost.team === "Cubs" ||
      nlPost.team === "Pirates" ||
      nlPost.team === "Reds" ||
      nlPost.team === "Diamondbacks" ||
      nlPost.team === "Dodgers" ||
      nlPost.team === "Giants" ||
      nlPost.team === "Padres" ||
      nlPost.team === "Rockies"
  );
  // NL East Posts
  const mlbNlEastPostsList = mlbNlPostsList.filter(
    (nlEastPost) =>
      nlEastPost.team === "Braves" ||
      nlEastPost.team === "Marlins" ||
      nlEastPost.team === "Mets" ||
      nlEastPost.team === "Nationals" ||
      nlEastPost.team === "Phillies"
  );
  // NL Central Posts
  const mlbNlCentralPostsList = mlbNlPostsList.filter(
    (nlCentralPosts) =>
      nlCentralPosts.team === "Brewers" ||
      nlCentralPosts.team === "Cardinals" ||
      nlCentralPosts.team === "Cubs" ||
      nlCentralPosts.team === "Pirates" ||
      nlCentralPosts.team === "Reds"
  );
  // NL west Posts
  const mlbNlWestPostsList = mlbNlPostsList.filter(
    (nlWestPost) =>
      nlWestPost.team === "Diamondbacks" ||
      nlWestPost.team === "Dodgers" ||
      nlWestPost.team === "Giants" ||
      nlWestPost.team === "Padres" ||
      nlWestPost.team === "Rockies"
  );
  // NL East Teams
  const mlbBravesPostsList = mlbNlEastPostsList.filter(
    (bravesPost) => bravesPost.team === "Braves"
  );
  const mlbMarlinsPostsList = mlbNlEastPostsList.filter(
    (marlinsPost) => marlinsPost.team === "Marlins"
  );
  const mlbMetsPostsList = mlbNlEastPostsList.filter(
    (metsPost) => metsPost.team === "Mets"
  );
  const mlbNationalsPostsList = mlbNlEastPostsList.filter(
    (nationalsPost) => nationalsPost.team === "Nationals"
  );
  const mlbPhilliesPostsList = mlbNlEastPostsList.filter(
    (philliesPost) => philliesPost.team === "Phillies"
  );
  // NL Central Teams
  const mlbBrewersPostsList = mlbNlCentralPostsList.filter(
    (brewersPost) => brewersPost.team === "Brewers"
  );
  const mlbCardinalsPostsList = mlbNlCentralPostsList.filter(
    (cardinalsPost) => cardinalsPost.team === "Cardinals"
  );
  const mlbCubsPostsList = mlbNlCentralPostsList.filter(
    (cubsPost) => cubsPost.team === "Cubs"
  );
  const mlbPiratesPostsList = mlbNlCentralPostsList.filter(
    (piratesPost) => piratesPost.team === "Pirates"
  );
  const mlbRedsPostsList = mlbNlCentralPostsList.filter(
    (redsPost) => redsPost.team === "Reds"
  );
  // NL West Teams
  const mlbDiamondbacksPostsList = mlbNlWestPostsList.filter(
    (diamondbacksPost) => diamondbacksPost.team === "Diamondbacks"
  );
  const mlbDodgersPostsList = mlbNlWestPostsList.filter(
    (dodgersPost) => dodgersPost.team === "Dodgers"
  );
  const mlbGiantsPostsList = mlbNlWestPostsList.filter(
    (giantsPost) => giantsPost.team === "Giants"
  );
  const mlbPadresPostsList = mlbNlWestPostsList.filter(
    (padresPost) => padresPost.team === "Padres"
  );
  const mlbRockiesPostsList = mlbNlWestPostsList.filter(
    (rockiesPost) => rockiesPost.team === "Rockies"
  );

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
              NEWEST
            </span>
            <div className="sortBy__optionsDivider"></div>
            <span
              onClick={() => setSortBy(false)}
              className={!sortBy ? "oldest" : ""}
            >
              OLDEST
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
                  EAST
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbDivisionClick(2)}
                  className={mlbDivisionFilter === 2 ? "central" : ""}
                >
                  CENTRAL
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbDivisionClick(3)}
                  className={mlbDivisionFilter === 3 ? "west" : ""}
                >
                  WEST
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
                  BLUE JAYS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(112)}
                  className={mlbTeamFilter === 112 ? "orioles" : ""}
                >
                  ORIOLES
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(113)}
                  className={mlbTeamFilter === 113 ? "rays" : ""}
                >
                  RAYS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(114)}
                  className={mlbTeamFilter === 114 ? "redsox" : ""}
                >
                  RED SOX
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(115)}
                  className={mlbTeamFilter === 115 ? "yankees" : ""}
                >
                  YANKEES
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
                  GUARDIANS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(122)}
                  className={mlbTeamFilter === 122 ? "royals" : ""}
                >
                  ROYALS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(123)}
                  className={mlbTeamFilter === 123 ? "tigers" : ""}
                >
                  TIGERS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(124)}
                  className={mlbTeamFilter === 124 ? "twins" : ""}
                >
                  TWINS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(125)}
                  className={mlbTeamFilter === 125 ? "whitesox" : ""}
                >
                  WHITE SOX
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
                  ANGELS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(132)}
                  className={mlbTeamFilter === 132 ? "astros" : ""}
                >
                  ASTROS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(133)}
                  className={mlbTeamFilter === 133 ? "athletics" : ""}
                >
                  ATHLETICS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(134)}
                  className={mlbTeamFilter === 134 ? "mariners" : ""}
                >
                  MARINERS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(135)}
                  className={mlbTeamFilter === 135 ? "rangers" : ""}
                >
                  RANGERS
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
                  BRAVES
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(212)}
                  className={mlbTeamFilter === 212 ? "marlins" : ""}
                >
                  MARLINS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(213)}
                  className={mlbTeamFilter === 213 ? "mets" : ""}
                >
                  METS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(214)}
                  className={mlbTeamFilter === 214 ? "nationals" : ""}
                >
                  NATIONALS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(215)}
                  className={mlbTeamFilter === 215 ? "phillies" : ""}
                >
                  PHILLIES
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
                  BREWERS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(222)}
                  className={mlbTeamFilter === 222 ? "cardinals" : ""}
                >
                  CARDINALS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(223)}
                  className={mlbTeamFilter === 223 ? "braves" : ""}
                >
                  CUBS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(224)}
                  className={mlbTeamFilter === 224 ? "pirates" : ""}
                >
                  PIRATES
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(225)}
                  className={mlbTeamFilter === 225 ? "reds" : ""}
                >
                  REDS
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
                  DIAMONDBACKS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(232)}
                  className={mlbTeamFilter === 232 ? "dodgers" : ""}
                >
                  DODGERS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(233)}
                  className={mlbTeamFilter === 233 ? "giants" : ""}
                >
                  GIANTS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(234)}
                  className={mlbTeamFilter === 234 ? "padres" : ""}
                >
                  PADRES
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleMlbTeamClick(235)}
                  className={mlbTeamFilter === 235 ? "rockies" : ""}
                >
                  {/* ROCKIES */}
                  Rockies
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Card display filters */}
      <div className="mlbPosts__main">
        <div className="mlbPosts__pageLinks">
          <Link to="/mlb" className="link active">
            <i className="fas fa-baseball-ball"></i>
          </Link>
          <Link to="/nba" className="link">
            <i className="fas fa-basketball-ball"></i>
          </Link>
          <Link to="/nfl" className="link">
            <i className="fas fa-football-ball"></i>
          </Link>
          <Link to="/nhl" className="link">
            <i className="fas fa-hockey-puck"></i>
          </Link>
        </div>
        <div
          className={sortBy ? "mlbPosts__list newest" : "mlbPosts__list oldest"}
        >
          {/* All MLB Posts */}
          {mlbFilter &&
            mlbConferenceFilter === 0 &&
            mlbDivisionFilter === 0 &&
            mlbTeamFilter === 0 && (
              <>
                {mlbPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* AL Map */}
          {mlbFilter &&
            mlbConferenceFilter === 1 &&
            mlbDivisionFilter === 0 &&
            mlbTeamFilter === 0 && (
              <>
                {mlbAlPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* NL Map */}
          {mlbFilter &&
            mlbConferenceFilter === 2 &&
            mlbDivisionFilter === 0 &&
            mlbTeamFilter === 0 && (
              <>
                {mlbNlPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* AL East Map */}
          {mlbFilter &&
            mlbConferenceFilter === 1 &&
            mlbDivisionFilter === 1 &&
            mlbTeamFilter === 0 && (
              <>
                {mlbAlEastPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* AL Central Map */}
          {mlbFilter &&
            mlbConferenceFilter === 1 &&
            mlbDivisionFilter === 2 &&
            mlbTeamFilter === 0 && (
              <>
                {mlbAlCentralPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* AL West Map */}
          {mlbFilter &&
            mlbConferenceFilter === 1 &&
            mlbDivisionFilter === 3 &&
            mlbTeamFilter === 0 && (
              <>
                {mlbAlWestPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* NL East Map */}
          {mlbFilter &&
            mlbConferenceFilter === 2 &&
            mlbDivisionFilter === 1 &&
            mlbTeamFilter === 0 && (
              <>
                {mlbNlEastPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* NL Central Map */}
          {mlbFilter &&
            mlbConferenceFilter === 2 &&
            mlbDivisionFilter === 2 &&
            mlbTeamFilter === 0 && (
              <>
                {mlbNlCentralPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* NL West Map */}
          {mlbFilter &&
            mlbConferenceFilter === 2 &&
            mlbDivisionFilter === 3 &&
            mlbTeamFilter === 0 && (
              <>
                {mlbNlWestPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* AL East Teams Map */}
          {/* Blue Jays Map */}
          {mlbFilter &&
            mlbConferenceFilter === 1 &&
            mlbDivisionFilter === 1 &&
            mlbTeamFilter === 111 && (
              <>
                {mlbBlueJaysPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Orioles Map */}
          {mlbFilter &&
            mlbConferenceFilter === 1 &&
            mlbDivisionFilter === 1 &&
            mlbTeamFilter === 112 && (
              <>
                {mlbOriolesPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Rays Map */}
          {mlbFilter &&
            mlbConferenceFilter === 1 &&
            mlbDivisionFilter === 1 &&
            mlbTeamFilter === 113 && (
              <>
                {mlbRaysPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Red Sox Map */}
          {mlbFilter &&
            mlbConferenceFilter === 1 &&
            mlbDivisionFilter === 1 &&
            mlbTeamFilter === 114 && (
              <>
                {mlbRedSoxPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Yankees Map */}
          {mlbFilter &&
            mlbConferenceFilter === 1 &&
            mlbDivisionFilter === 1 &&
            mlbTeamFilter === 115 && (
              <>
                {mlbYankeesPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* AL Central Teams Map */}
          {/* Guardians Map */}
          {mlbFilter &&
            mlbConferenceFilter === 1 &&
            mlbDivisionFilter === 2 &&
            mlbTeamFilter === 121 && (
              <>
                {mlbGuardiansPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Royals Map */}
          {mlbFilter &&
            mlbConferenceFilter === 1 &&
            mlbDivisionFilter === 2 &&
            mlbTeamFilter === 122 && (
              <>
                {mlbRoyalsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Tigers Map */}
          {mlbFilter &&
            mlbConferenceFilter === 1 &&
            mlbDivisionFilter === 2 &&
            mlbTeamFilter === 123 && (
              <>
                {mlbTigersPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Twins Map */}
          {mlbFilter &&
            mlbConferenceFilter === 1 &&
            mlbDivisionFilter === 2 &&
            mlbTeamFilter === 124 && (
              <>
                {mlbTwinsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}

          {/* White Sox Map */}
          {mlbFilter &&
            mlbConferenceFilter === 1 &&
            mlbDivisionFilter === 2 &&
            mlbTeamFilter === 125 && (
              <>
                {mlbWhiteSoxPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* AL West Team Map */}
          {/* Angels Map */}
          {mlbFilter &&
            mlbConferenceFilter === 1 &&
            mlbDivisionFilter === 3 &&
            mlbTeamFilter === 131 && (
              <>
                {mlbAngelsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Astros Map */}
          {mlbFilter &&
            mlbConferenceFilter === 1 &&
            mlbDivisionFilter === 3 &&
            mlbTeamFilter === 132 && (
              <>
                {mlbAstrosPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Athletics Map */}
          {mlbFilter &&
            mlbConferenceFilter === 1 &&
            mlbDivisionFilter === 3 &&
            mlbTeamFilter === 133 && (
              <>
                {mlbAthleticsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Mariners Map */}
          {mlbFilter &&
            mlbConferenceFilter === 1 &&
            mlbDivisionFilter === 3 &&
            mlbTeamFilter === 134 && (
              <>
                {mlbMarinersPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Rangers Map */}
          {mlbFilter &&
            mlbConferenceFilter === 1 &&
            mlbDivisionFilter === 3 &&
            mlbTeamFilter === 135 && (
              <>
                {mlbRangersPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* NL East Teams Map */}
          {/* Braves Map */}
          {mlbFilter &&
            mlbConferenceFilter === 2 &&
            mlbDivisionFilter === 1 &&
            mlbTeamFilter === 211 && (
              <>
                {mlbBravesPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Marlins Map */}
          {mlbFilter &&
            mlbConferenceFilter === 2 &&
            mlbDivisionFilter === 1 &&
            mlbTeamFilter === 212 && (
              <>
                {mlbMarlinsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Mets Map */}
          {mlbFilter &&
            mlbConferenceFilter === 2 &&
            mlbDivisionFilter === 1 &&
            mlbTeamFilter === 213 && (
              <>
                {mlbMetsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Nationals Map */}
          {mlbFilter &&
            mlbConferenceFilter === 2 &&
            mlbDivisionFilter === 1 &&
            mlbTeamFilter === 214 && (
              <>
                {mlbNationalsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Phillies Map */}
          {mlbFilter &&
            mlbConferenceFilter === 2 &&
            mlbDivisionFilter === 1 &&
            mlbTeamFilter === 215 && (
              <>
                {mlbPhilliesPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* NL Central Teams Map */}
          {/* Brewers */}
          {mlbFilter &&
            mlbConferenceFilter === 2 &&
            mlbDivisionFilter === 2 &&
            mlbTeamFilter === 221 && (
              <>
                {mlbBrewersPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Cardinals */}
          {mlbFilter &&
            mlbConferenceFilter === 2 &&
            mlbDivisionFilter === 2 &&
            mlbTeamFilter === 222 && (
              <>
                {mlbCardinalsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Cubs */}
          {mlbFilter &&
            mlbConferenceFilter === 2 &&
            mlbDivisionFilter === 2 &&
            mlbTeamFilter === 223 && (
              <>
                {mlbCubsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Pirates */}
          {mlbFilter &&
            mlbConferenceFilter === 2 &&
            mlbDivisionFilter === 2 &&
            mlbTeamFilter === 224 && (
              <>
                {mlbPiratesPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Reds */}
          {mlbFilter &&
            mlbConferenceFilter === 2 &&
            mlbDivisionFilter === 2 &&
            mlbTeamFilter === 225 && (
              <>
                {mlbRedsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}

          {/* NL West Teams Map */}
          {/* Diamondbacks */}
          {mlbFilter &&
            mlbConferenceFilter === 2 &&
            mlbDivisionFilter === 3 &&
            mlbTeamFilter === 231 && (
              <>
                {mlbDiamondbacksPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Dodgers */}
          {mlbFilter &&
            mlbConferenceFilter === 2 &&
            mlbDivisionFilter === 3 &&
            mlbTeamFilter === 232 && (
              <>
                {mlbDodgersPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Giants */}
          {mlbFilter &&
            mlbConferenceFilter === 2 &&
            mlbDivisionFilter === 3 &&
            mlbTeamFilter === 233 && (
              <>
                {mlbGiantsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Padres */}
          {mlbFilter &&
            mlbConferenceFilter === 2 &&
            mlbDivisionFilter === 3 &&
            mlbTeamFilter === 234 && (
              <>
                {mlbPadresPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Rockies */}
          {mlbFilter &&
            mlbConferenceFilter === 2 &&
            mlbDivisionFilter === 3 &&
            mlbTeamFilter === 235 && (
              <>
                {mlbRockiesPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
        </div>
      </div>
    </div>
  );
};

export default MLBPosts;
