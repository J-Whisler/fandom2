import React, { useState, useEffect } from "react";
import "./NBAPosts.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import PostCard from "../../components/PostCard/PostCard";

const NBAPosts = () => {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [sortBy, setSortBy] = useState(false);
  const [nbaFilter, setNbaFilter] = useState(true);
  const [nbaConferenceFilter, setNbaConferenceFilter] = useState(0);
  const [nbaDivisionFilter, setNbaDivisionFilter] = useState(0);
  const [nbaTeamFilter, setNbaTeamFilter] = useState(0);

  // Get Posts
  useEffect(() => {
    axios.get("http://localhost:2323/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  // Get NBA Posts
  const nbaPostsList = listOfPosts.filter(
    (nbaPost) => nbaPost.league === "NBA"
  );

  // Handle Click Events
  const handleNbaClick = () => {
    setNbaFilter(true);
    setNbaConferenceFilter(0);
    setNbaDivisionFilter(0);
    setNbaTeamFilter(0);
  };

  const handleNbaConferenceClick = (index) => {
    setNbaConferenceFilter(index);
    setNbaDivisionFilter(0);
    setNbaTeamFilter(0);
  };

  const handleNbaDivisionClick = (index) => {
    setNbaDivisionFilter(index);
    setNbaTeamFilter(0);
  };

  const handleNbaTeamClick = (index) => {
    setNbaTeamFilter(index);
    console.log(nbaTeamFilter);
  };

  // Filters
  // EAST
  const nbaEastPostsList = listOfPosts.filter(
    (eastPost) =>
      eastPost.team === "Celtics" ||
      eastPost.team === "Knicks" ||
      eastPost.team === "Nets" ||
      eastPost.team === "Sixers" ||
      eastPost.team === "Raptors" ||
      eastPost.team === "Bucks" ||
      eastPost.team === "Bulls" ||
      eastPost.team === "Cavaliers" ||
      eastPost.team === "Pacers" ||
      eastPost.team === "Pistons" ||
      eastPost.team === "Hawks" ||
      eastPost.team === "Heat" ||
      eastPost.team === "Hornets" ||
      eastPost.team === "Magic" ||
      eastPost.team === "Wizards"
  );
  // EAST DIVISIONS
  // Atlantic
  const nbaEastAtlanticPostsList = nbaEastPostsList.filter(
    (atlanticPost) =>
      atlanticPost.team === "Celtics" ||
      atlanticPost.team === "Knicks" ||
      atlanticPost.team === "Nets" ||
      atlanticPost.team === "Sixers" ||
      atlanticPost.team === "Raptors"
  );
  // Atlantic Teams
  const celticsPostsList = nbaEastAtlanticPostsList.filter(
    (celticsPost) => celticsPost.team === "Celtics"
  );
  const knicksPostsList = nbaEastAtlanticPostsList.filter(
    (knicksPost) => knicksPost.team === "Knicks"
  );
  const netsPostsList = nbaEastAtlanticPostsList.filter(
    (netsPost) => netsPost.team === "Nets"
  );
  const sixersPostsList = nbaEastAtlanticPostsList.filter(
    (sixersPost) => sixersPost.team === "Sixers"
  );
  const raptorsPostsList = nbaEastAtlanticPostsList.filter(
    (raptorsPost) => raptorsPost.team === "Raptors"
  );
  // Cental
  const nbaEastCentralPostsList = nbaEastPostsList.filter(
    (centralPost) =>
      centralPost.team === "Bucks" ||
      centralPost.team === "Bulls" ||
      centralPost.team === "Cavaliers" ||
      centralPost.team === "Pacers" ||
      centralPost.team === "Pistons"
  );
  // Central Teams
  const bucksPostsList = nbaEastCentralPostsList.filter(
    (bucksPost) => bucksPost.team === "Bucks"
  );
  const bullsPostsList = nbaEastCentralPostsList.filter(
    (bullsPost) => bullsPost.team === "Bulls"
  );
  const cavaliersPostsList = nbaEastCentralPostsList.filter(
    (cavaliersPost) => cavaliersPost.team === "Cavaliers"
  );
  const pacersPostsList = nbaEastCentralPostsList.filter(
    (pacersPost) => pacersPost.team === "Pacers"
  );
  const pistonsPostsList = nbaEastCentralPostsList.filter(
    (pistonsPost) => pistonsPost.team === "Pistons"
  );
  // Southeast
  const nbaEastSoutheastPostsList = nbaEastPostsList.filter(
    (southwestPost) =>
      southwestPost.team === "Hawks" ||
      southwestPost.team === "Heat" ||
      southwestPost.team === "Hornets" ||
      southwestPost.team === "Magic" ||
      southwestPost.team === "Wizards"
  );
  // Southeast Teams
  const hawksPostsList = nbaEastSoutheastPostsList.filter(
    (hawksPost) => hawksPost.team === "Hawks"
  );
  const heatPostsList = nbaEastSoutheastPostsList.filter(
    (heatPost) => heatPost.team === "Heat"
  );
  const hornetsPostsList = nbaEastSoutheastPostsList.filter(
    (hornetsPost) => hornetsPost.team === "Hornets"
  );
  const magicPostsList = nbaEastSoutheastPostsList.filter(
    (magicPost) => magicPost.team === "Magic"
  );
  const wizardsPostsList = nbaEastSoutheastPostsList.filter(
    (wizardsPost) => wizardsPost.team === "Wizards"
  );
  // WEST
  const nbaWestPostsList = listOfPosts.filter(
    (westPost) =>
      westPost.team === "Jazz" ||
      westPost.team === "Nuggets" ||
      westPost.team === "Thunder" ||
      westPost.team === "Timberwolves" ||
      westPost.team === "Trail Blazers" ||
      westPost.team === "Clippers" ||
      westPost.team === "Kings" ||
      westPost.team === "Lakers" ||
      westPost.team === "Suns" ||
      westPost.team === "Warriors" ||
      westPost.team === "Grizzlies" ||
      westPost.team === "Mavericks" ||
      westPost.team === "Pelicans" ||
      westPost.team === "Rockets" ||
      westPost.team === "Spurs"
  );

  // WEST DIVISONS
  // WEST NORTHWEST
  const nbaWestNorthwestPostsList = nbaWestPostsList.filter(
    (northwestPost) =>
      northwestPost.team === "Jazz" ||
      northwestPost.team === "Nuggets" ||
      northwestPost.team === "Thunder" ||
      northwestPost.team === "Timberwolves" ||
      northwestPost.team === "Trail Blazers"
  );
  // Northwest Teams
  const jazzPostsList = nbaWestNorthwestPostsList.filter(
    (jazzPost) => jazzPost.team === "Jazz"
  );
  const nuggetPostsList = nbaWestNorthwestPostsList.filter(
    (nuggetsPost) => nuggetsPost.team === "Nuggets"
  );
  const thunderPostsList = nbaWestNorthwestPostsList.filter(
    (thunderPost) => thunderPost.team === "Thunder"
  );
  const timberwolvesPostsList = nbaWestNorthwestPostsList.filter(
    (timberwolvesPost) => timberwolvesPost.team === "Timberwolves"
  );
  const trailBlazersPostsList = nbaWestNorthwestPostsList.filter(
    (trailBlazersPost) => trailBlazersPost.team === "Trail Blazers"
  );
  // WEST PACIFIC
  const nbaWestPacificPostsList = nbaWestPostsList.filter(
    (pacificPost) =>
      pacificPost.team === "Clippers" ||
      pacificPost.team === "Kings" ||
      pacificPost.team === "Lakers" ||
      pacificPost.team === "Suns" ||
      pacificPost.team === "Warriors"
  );
  // Pacific Teams
  const clippersPostsList = nbaWestPacificPostsList.filter(
    (clippersPost) => clippersPost.team === "Clippers"
  );
  const kingsPostsList = nbaWestPacificPostsList.filter(
    (kingsPost) => kingsPost.team === "Kings"
  );
  const lakersPostsList = nbaWestPacificPostsList.filter(
    (lakersPost) => lakersPost.team === "Lakers"
  );
  const sunsPostsList = nbaWestPacificPostsList.filter(
    (sunsPost) => sunsPost.team === "Suns"
  );
  const warriorsPostsList = nbaWestPacificPostsList.filter(
    (warriorsPost) => warriorsPost.team === "Warriors"
  );
  // WEST SOUTHWEST
  const nbaWestSouthwestPostsList = nbaWestPostsList.filter(
    (southwestPost) =>
      southwestPost.team === "Grizzlies" ||
      southwestPost.team === "Mavericks" ||
      southwestPost.team === "Pelicans" ||
      southwestPost.team === "Rockets" ||
      southwestPost.team === "Spurs"
  );
  // West Teams
  const grizzliesPostsList = nbaWestSouthwestPostsList.filter(
    (grizzliesPost) => grizzliesPost.team === "Grizzlies"
  );
  const mavericksPostsList = nbaWestSouthwestPostsList.filter(
    (grizzliesPost) => grizzliesPost.team === "Mavericks"
  );
  const pelicansPostsList = nbaWestSouthwestPostsList.filter(
    (grizzliesPost) => grizzliesPost.team === "Pelicans"
  );
  const rocketsPostsList = nbaWestSouthwestPostsList.filter(
    (grizzliesPost) => grizzliesPost.team === "Rockets"
  );
  const spursPostsList = nbaWestSouthwestPostsList.filter(
    (grizzliesPost) => grizzliesPost.team === "Spurs"
  );

  return (
    <div className="nbaPosts">
      <div className="nbaPosts__header">
        <div className="nbaPosts__sortBy">
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
        <div className="nbaPosts__filterBy">
          <div className="filterBy__header">
            <h6>Filter By: </h6>
          </div>
          <div className="filterBy__options">
            <div className="filterBy__nba">
              <span onClick={handleNbaClick} className={nbaFilter ? "nba" : ""}>
                NBA
              </span>
            </div>
            <div className="filterBy__nbaConference">
              <div className="filterBy__optionsDivider"></div>
              <span
                onClick={() => handleNbaConferenceClick(1)}
                className={nbaConferenceFilter === 1 ? "east" : ""}
              >
                EAST
              </span>
              <div className="filterBy__optionsDot"></div>
              <span
                onClick={() => handleNbaConferenceClick(2)}
                className={nbaConferenceFilter === 2 ? "west" : ""}
              >
                WEST
              </span>
            </div>
            {/* NBA Divisions Start */}
            {nbaConferenceFilter === 1 && (
              <div className="filterBy__nbaDivision">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleNbaDivisionClick(1)}
                  className={nbaDivisionFilter === 1 ? "atlantic" : ""}
                >
                  ATLANTIC
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNbaDivisionClick(2)}
                  className={nbaDivisionFilter === 2 ? "central" : ""}
                >
                  CENTRAL
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNbaDivisionClick(3)}
                  className={nbaDivisionFilter === 3 ? "southeast" : ""}
                >
                  SOUTHEAST
                </span>
              </div>
            )}
            {nbaConferenceFilter === 2 && (
              <div className="filterBy__nbaDivision">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleNbaDivisionClick(4)}
                  className={nbaDivisionFilter === 4 ? "northwest" : ""}
                >
                  NORTHWEST
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNbaDivisionClick(5)}
                  className={nbaDivisionFilter === 5 ? "pacific" : ""}
                >
                  PACIFIC
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNbaDivisionClick(6)}
                  className={nbaDivisionFilter === 6 ? "southwest" : ""}
                >
                  SOUTHWEST
                </span>
              </div>
            )}
            {/* NBA Divisions End */}
            {/* NBA Teams Start */}
            {/* EAST ATLANTIC */}
            {nbaDivisionFilter === 1 && (
              <div className="filterBy__nbaTeam ">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleNbaTeamClick(111)}
                  className={nbaTeamFilter === 111 ? "celtics" : ""}
                >
                  CELTICS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNbaTeamClick(112)}
                  className={nbaTeamFilter === 112 ? "knicks" : ""}
                >
                  KNICKS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNbaTeamClick(113)}
                  className={nbaTeamFilter === 113 ? "nets" : ""}
                >
                  NETS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNbaTeamClick(114)}
                  className={nbaTeamFilter === 114 ? "sixers" : ""}
                >
                  SIXERS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNbaTeamClick(115)}
                  className={nbaTeamFilter === 115 ? "raptors" : ""}
                >
                  RAPTORS
                </span>
              </div>
            )}
            {/* EAST CENTRAL */}
            {nbaDivisionFilter === 2 && (
              <div className="filterBy__nbaTeam ">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleNbaTeamClick(121)}
                  className={nbaTeamFilter === 121 ? "bucks" : ""}
                >
                  BUCKS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNbaTeamClick(122)}
                  className={nbaTeamFilter === 122 ? "bulls" : ""}
                >
                  BULLS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNbaTeamClick(123)}
                  className={nbaTeamFilter === 123 ? "cavaliers" : ""}
                >
                  CAVALIERS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNbaTeamClick(124)}
                  className={nbaTeamFilter === 124 ? "pacers" : ""}
                >
                  PACERS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNbaTeamClick(125)}
                  className={nbaTeamFilter === 125 ? "pistons" : ""}
                >
                  PISTONS
                </span>
              </div>
            )}
            {/* EAST SOUTHEAST */}
            {nbaDivisionFilter === 3 && (
              <div className="filterBy__nbaTeam ">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleNbaTeamClick(131)}
                  className={nbaTeamFilter === 131 ? "hawks" : ""}
                >
                  HAWKS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNbaTeamClick(132)}
                  className={nbaTeamFilter === 132 ? "heat" : ""}
                >
                  HEAT
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNbaTeamClick(133)}
                  className={nbaTeamFilter === 133 ? "hornets" : ""}
                >
                  HORNETS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNbaTeamClick(134)}
                  className={nbaTeamFilter === 134 ? "magic" : ""}
                >
                  MAGIC
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNbaTeamClick(135)}
                  className={nbaTeamFilter === 135 ? "wizards" : ""}
                >
                  WIZARDS
                </span>
              </div>
            )}
            {/* WEST NORTHWEST */}
            {nbaDivisionFilter === 4 && (
              <div className="filterBy__nbaTeam ">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleNbaTeamClick(241)}
                  className={nbaTeamFilter === 241 ? "jazz" : ""}
                >
                  JAZZ
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNbaTeamClick(242)}
                  className={nbaTeamFilter === 242 ? "nuggets" : ""}
                >
                  NUGGETS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNbaTeamClick(243)}
                  className={nbaTeamFilter === 243 ? "thunder" : ""}
                >
                  THUNDER
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNbaTeamClick(244)}
                  className={nbaTeamFilter === 244 ? "timberwolves" : ""}
                >
                  T-WOLVES
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNbaTeamClick(245)}
                  className={nbaTeamFilter === 245 ? "trailblazers" : ""}
                >
                  T-BLAZERS
                </span>
              </div>
            )}
            {/* WEST PACIFIC */}
            {nbaDivisionFilter === 5 && (
              <div className="filterBy__nbaTeam ">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleNbaTeamClick(251)}
                  className={nbaTeamFilter === 251 ? "clippers" : ""}
                >
                  CLIPPERS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNbaTeamClick(252)}
                  className={nbaTeamFilter === 252 ? "kings" : ""}
                >
                  KINGS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNbaTeamClick(253)}
                  className={nbaTeamFilter === 253 ? "lakers" : ""}
                >
                  LAKERS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNbaTeamClick(254)}
                  className={nbaTeamFilter === 254 ? "suns" : ""}
                >
                  SUNS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNbaTeamClick(255)}
                  className={nbaTeamFilter === 255 ? "warriors" : ""}
                >
                  WARRIORS
                </span>
              </div>
            )}
            {/* WEST SOUTHWEST */}
            {nbaDivisionFilter === 6 && (
              <div className="filterBy__nbaTeam ">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleNbaTeamClick(261)}
                  className={nbaTeamFilter === 261 ? "grizzlies" : ""}
                >
                  GRIZZLIES
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNbaTeamClick(262)}
                  className={nbaTeamFilter === 262 ? "mavericks" : ""}
                >
                  MAVERICKS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNbaTeamClick(263)}
                  className={nbaTeamFilter === 263 ? "pelicans" : ""}
                >
                  PELICANS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNbaTeamClick(264)}
                  className={nbaTeamFilter === 264 ? "rockets" : ""}
                >
                  ROCKETS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNbaTeamClick(265)}
                  className={nbaTeamFilter === 265 ? "spurs" : ""}
                >
                  SPURS
                </span>
              </div>
            )}
            {/* NBA Teams End */}
          </div>
        </div>
      </div>
      <div className="nbaPosts__main">
        <div className="nbaPosts__pageLinks">
          <Link to="/mlb" className="link">
            <i className="fas fa-baseball-ball"></i>
          </Link>
          <Link to="/nba" className="link active">
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
          className={sortBy ? "nbaPosts__list newest" : "nbaPosts__list oldest"}
        >
          {/* NBA POSTS */}
          {nbaFilter &&
            nbaConferenceFilter === 0 &&
            nbaDivisionFilter === 0 &&
            nbaTeamFilter === 0 && (
              <>
                {nbaPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}

          {/* NBA EAST POSTS */}
          {nbaFilter &&
            nbaConferenceFilter === 1 &&
            nbaDivisionFilter === 0 &&
            nbaTeamFilter === 0 && (
              <>
                {nbaEastPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* NBA WEST POSTS */}
          {nbaFilter &&
            nbaConferenceFilter === 2 &&
            nbaDivisionFilter === 0 &&
            nbaTeamFilter === 0 && (
              <>
                {nbaWestPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* NBA DIVISIONS */}
          {/* NBA EAST ATLANTIC */}
          {nbaFilter &&
            nbaConferenceFilter === 1 &&
            nbaDivisionFilter === 1 &&
            nbaTeamFilter === 0 && (
              <>
                {nbaEastAtlanticPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* NBA EAST CENTRAL */}
          {nbaFilter &&
            nbaConferenceFilter === 1 &&
            nbaDivisionFilter === 2 &&
            nbaTeamFilter === 0 && (
              <>
                {nbaEastCentralPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* NBA EAST SOUTHEAST */}
          {nbaFilter &&
            nbaConferenceFilter === 1 &&
            nbaDivisionFilter === 3 &&
            nbaTeamFilter === 0 && (
              <>
                {nbaEastSoutheastPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* NBA WEST NORTHWEST */}
          {nbaFilter &&
            nbaConferenceFilter === 2 &&
            nbaDivisionFilter === 4 &&
            nbaTeamFilter === 0 && (
              <>
                {nbaWestNorthwestPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* NBA WEST PACIFIC */}
          {nbaFilter &&
            nbaConferenceFilter === 2 &&
            nbaDivisionFilter === 5 &&
            nbaTeamFilter === 0 && (
              <>
                {nbaWestPacificPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* NBA WEST SOUTHWEST */}
          {nbaFilter &&
            nbaConferenceFilter === 2 &&
            nbaDivisionFilter === 6 &&
            nbaTeamFilter === 0 && (
              <>
                {nbaWestSouthwestPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* EAST ATLANTIC TEAMS */}
          {/* Celtics */}
          {nbaFilter &&
            nbaConferenceFilter === 1 &&
            nbaDivisionFilter === 1 &&
            nbaTeamFilter === 111 && (
              <>
                {celticsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Knicks */}
          {nbaFilter &&
            nbaConferenceFilter === 1 &&
            nbaDivisionFilter === 1 &&
            nbaTeamFilter === 112 && (
              <>
                {knicksPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Nets */}
          {nbaFilter &&
            nbaConferenceFilter === 1 &&
            nbaDivisionFilter === 1 &&
            nbaTeamFilter === 113 && (
              <>
                {netsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Sixers */}
          {nbaFilter &&
            nbaConferenceFilter === 1 &&
            nbaDivisionFilter === 1 &&
            nbaTeamFilter === 114 && (
              <>
                {sixersPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Raptors */}
          {nbaFilter &&
            nbaConferenceFilter === 1 &&
            nbaDivisionFilter === 1 &&
            nbaTeamFilter === 115 && (
              <>
                {raptorsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* East Central Teams */}
          {/* Bucks */}
          {nbaFilter &&
            nbaConferenceFilter === 1 &&
            nbaDivisionFilter === 2 &&
            nbaTeamFilter === 121 && (
              <>
                {bucksPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Bulls */}
          {nbaFilter &&
            nbaConferenceFilter === 1 &&
            nbaDivisionFilter === 2 &&
            nbaTeamFilter === 122 && (
              <>
                {bullsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Cavaliers */}
          {nbaFilter &&
            nbaConferenceFilter === 1 &&
            nbaDivisionFilter === 2 &&
            nbaTeamFilter === 123 && (
              <>
                {cavaliersPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Pacers */}
          {nbaFilter &&
            nbaConferenceFilter === 1 &&
            nbaDivisionFilter === 2 &&
            nbaTeamFilter === 124 && (
              <>
                {pacersPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Pistons */}
          {nbaFilter &&
            nbaConferenceFilter === 1 &&
            nbaDivisionFilter === 2 &&
            nbaTeamFilter === 125 && (
              <>
                {pistonsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* East Southeast Teams */}
          {/* Hawks */}
          {nbaFilter &&
            nbaConferenceFilter === 1 &&
            nbaDivisionFilter === 3 &&
            nbaTeamFilter === 131 && (
              <>
                {hawksPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Heat */}
          {nbaFilter &&
            nbaConferenceFilter === 1 &&
            nbaDivisionFilter === 3 &&
            nbaTeamFilter === 132 && (
              <>
                {heatPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Hornets */}
          {nbaFilter &&
            nbaConferenceFilter === 1 &&
            nbaDivisionFilter === 3 &&
            nbaTeamFilter === 133 && (
              <>
                {hornetsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Magic */}
          {nbaFilter &&
            nbaConferenceFilter === 1 &&
            nbaDivisionFilter === 3 &&
            nbaTeamFilter === 134 && (
              <>
                {magicPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Wizards */}
          {nbaFilter &&
            nbaConferenceFilter === 1 &&
            nbaDivisionFilter === 3 &&
            nbaTeamFilter === 135 && (
              <>
                {wizardsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* West Northwest Teams */}
          {/* Jazz */}
          {nbaFilter &&
            nbaConferenceFilter === 2 &&
            nbaDivisionFilter === 4 &&
            nbaTeamFilter === 241 && (
              <>
                {jazzPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Nuggets */}
          {nbaFilter &&
            nbaConferenceFilter === 2 &&
            nbaDivisionFilter === 4 &&
            nbaTeamFilter === 242 && (
              <>
                {nuggetPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Thunder */}
          {nbaFilter &&
            nbaConferenceFilter === 2 &&
            nbaDivisionFilter === 4 &&
            nbaTeamFilter === 243 && (
              <>
                {thunderPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Timberwolvers */}
          {nbaFilter &&
            nbaConferenceFilter === 2 &&
            nbaDivisionFilter === 4 &&
            nbaTeamFilter === 244 && (
              <>
                {timberwolvesPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Trail Blazers */}
          {nbaFilter &&
            nbaConferenceFilter === 2 &&
            nbaDivisionFilter === 4 &&
            nbaTeamFilter === 245 && (
              <>
                {trailBlazersPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* West Pacific Teams */}
          {/* Clippers */}
          {nbaFilter &&
            nbaConferenceFilter === 2 &&
            nbaDivisionFilter === 5 &&
            nbaTeamFilter === 251 && (
              <>
                {clippersPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Kings */}
          {nbaFilter &&
            nbaConferenceFilter === 2 &&
            nbaDivisionFilter === 5 &&
            nbaTeamFilter === 252 && (
              <>
                {kingsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Lakers */}
          {nbaFilter &&
            nbaConferenceFilter === 2 &&
            nbaDivisionFilter === 5 &&
            nbaTeamFilter === 253 && (
              <>
                {lakersPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Suns */}
          {nbaFilter &&
            nbaConferenceFilter === 2 &&
            nbaDivisionFilter === 5 &&
            nbaTeamFilter === 254 && (
              <>
                {sunsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Warriors */}
          {nbaFilter &&
            nbaConferenceFilter === 2 &&
            nbaDivisionFilter === 5 &&
            nbaTeamFilter === 255 && (
              <>
                {warriorsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}

          {/* West Southwest Teams */}
          {/* Grizzlies */}
          {nbaFilter &&
            nbaConferenceFilter === 2 &&
            nbaDivisionFilter === 6 &&
            nbaTeamFilter === 261 && (
              <>
                {grizzliesPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Mavericks */}
          {nbaFilter &&
            nbaConferenceFilter === 2 &&
            nbaDivisionFilter === 6 &&
            nbaTeamFilter === 262 && (
              <>
                {mavericksPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Pelicans */}
          {nbaFilter &&
            nbaConferenceFilter === 2 &&
            nbaDivisionFilter === 6 &&
            nbaTeamFilter === 263 && (
              <>
                {pelicansPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Rockets */}
          {nbaFilter &&
            nbaConferenceFilter === 2 &&
            nbaDivisionFilter === 6 &&
            nbaTeamFilter === 264 && (
              <>
                {rocketsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Spurs */}
          {nbaFilter &&
            nbaConferenceFilter === 2 &&
            nbaDivisionFilter === 6 &&
            nbaTeamFilter === 265 && (
              <>
                {spursPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
        </div>
      </div>
    </div>
  );
};

export default NBAPosts;
