import React, { useState, useEffect } from "react";
import "./NHLPosts.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import PostCard from "../../components/PostCard/PostCard";

const NFLPosts = () => {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [sortBy, setSortBy] = useState(false);
  const [nhlFilter, setNhlFilter] = useState(true);
  const [nhlConferenceFilter, setNhlConferenceFilter] = useState(0);
  const [nhlDivisionFilter, setNhlDivisionFilter] = useState(0);
  const [nhlTeamFilter, setNhlTeamFilter] = useState(0);

  // Get Posts
  useEffect(() => {
    axios.get("http://localhost:2323/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  // Get NHL Posts
  const nhlPostsList = listOfPosts.filter(
    (nhlPost) => nhlPost.league === "NHL"
  );

  // Handle Click Events
  const handleNhlClick = () => {
    setNhlFilter(true);
    setNhlConferenceFilter(0);
    setNhlDivisionFilter(0);
    setNhlTeamFilter(0);
  };

  const handleNhlConferenceClick = (index) => {
    setNhlConferenceFilter(index);
    setNhlDivisionFilter(0);
    setNhlTeamFilter(0);
  };

  const handleNhlDivisionClick = (index) => {
    setNhlDivisionFilter(index);
    setNhlTeamFilter(0);
  };

  const handleNhlTeamClick = (index) => {
    setNhlTeamFilter(index);
  };

  // NHL Filters
  // EASt
  const nhlEastPostsList = nhlPostsList.filter(
    (eastPost) =>
      eastPost.team === "Bruins" ||
      eastPost.team === "Canadiens" ||
      eastPost.team === "Lightning" ||
      eastPost.team === "Maple Leafs" ||
      eastPost.team === "Panthers" ||
      eastPost.team === "Red Wings" ||
      eastPost.team === "Sabres" ||
      eastPost.team === "Senators" ||
      eastPost.team === "Blue Jackets" ||
      eastPost.team === "Capitals" ||
      eastPost.team === "Devils" ||
      eastPost.team === "Flyers" ||
      eastPost.team === "Hurricanes" ||
      eastPost.team === "Islanders" ||
      eastPost.team === "Penguins" ||
      eastPost.team === "Rangers"
  );
  // NHL EAST DIVISIONS
  // EAST Atlantic
  const nhlEastAtlanticPostsList = nhlEastPostsList.filter(
    (eastAtlanticPost) =>
      eastAtlanticPost.team === "Bruins" ||
      eastAtlanticPost.team === "Canadiens" ||
      eastAtlanticPost.team === "Lightning" ||
      eastAtlanticPost.team === "Maple Leafs" ||
      eastAtlanticPost.team === "Panthers" ||
      eastAtlanticPost.team === "Red Wings" ||
      eastAtlanticPost.team === "Sabres" ||
      eastAtlanticPost.team === "Senators"
  );
  // East Atlantic Teams
  const bruinsPostsList = nhlEastAtlanticPostsList.filter(
    (bruinsPost) => bruinsPost.team === "Bruins"
  );
  const canadiensPostsList = nhlEastAtlanticPostsList.filter(
    (canadiensPost) => canadiensPost.team === "Canadiens"
  );
  const lightningPostsList = nhlEastAtlanticPostsList.filter(
    (lightningPost) => lightningPost.team === "Lightning"
  );
  const mapleLeafssPostsList = nhlEastAtlanticPostsList.filter(
    (mapleLeafsPost) => mapleLeafsPost.team === "Maple Leafs"
  );
  const panthersPostsList = nhlEastAtlanticPostsList.filter(
    (panthersPost) => panthersPost.team === "Panthers"
  );
  const redWingsPostsList = nhlEastAtlanticPostsList.filter(
    (redWingsPost) => redWingsPost.team === "Red Wings"
  );
  const sabresPostsList = nhlEastAtlanticPostsList.filter(
    (sabresPost) => sabresPost.team === "Sabres"
  );
  const senatorsPostsList = nhlEastAtlanticPostsList.filter(
    (senatorsPost) => senatorsPost.team === "Senators"
  );

  // East Metropolitan
  const nhlEastMetropolitanPostsList = nhlEastPostsList.filter(
    (eastMetropolitanPost) =>
      eastMetropolitanPost.team === "Blue Jackets" ||
      eastMetropolitanPost.team === "Capitals" ||
      eastMetropolitanPost.team === "Devils" ||
      eastMetropolitanPost.team === "Flyers" ||
      eastMetropolitanPost.team === "Hurricanes" ||
      eastMetropolitanPost.team === "Islanders" ||
      eastMetropolitanPost.team === "Penguins" ||
      eastMetropolitanPost.team === "Rangers"
  );
  // East Metropolitan Teams
  const blueJacketsPostsList = nhlEastMetropolitanPostsList.filter(
    (blueJacketsPost) => blueJacketsPost.team === "Blue Jackets"
  );
  const capitalsPostsList = nhlEastMetropolitanPostsList.filter(
    (capitalsPost) => capitalsPost.team === "Capitals"
  );
  const devilsPostsList = nhlEastMetropolitanPostsList.filter(
    (devilsPost) => devilsPost.team === "Devils"
  );
  const flyersPostsList = nhlEastMetropolitanPostsList.filter(
    (flyersPost) => flyersPost.team === "Flyers"
  );
  const hurricanesPostsList = nhlEastMetropolitanPostsList.filter(
    (hurricanesPost) => hurricanesPost.team === "Hurricanes"
  );
  const islandersPostsList = nhlEastMetropolitanPostsList.filter(
    (islandersPost) => islandersPost.team === "Islanders"
  );
  const penguinsPostsList = nhlEastMetropolitanPostsList.filter(
    (penguinsPost) => penguinsPost.team === "Penguins"
  );
  const rangersPostsList = nhlEastMetropolitanPostsList.filter(
    (rangersPost) => rangersPost.team === "Rangers"
  );

  //  NHL WEST
  const nhlWestPostsList = nhlPostsList.filter(
    (westPost) =>
      westPost.team === "Avalanche" ||
      westPost.team === "Blackhawks" ||
      westPost.team === "Blues" ||
      westPost.team === "Coyotes" ||
      westPost.team === "Jets" ||
      westPost.team === "Predators" ||
      westPost.team === "Stars" ||
      westPost.team === "Wild" ||
      westPost.team === "Canucks" ||
      westPost.team === "Ducks" ||
      westPost.team === "Flames" ||
      westPost.team === "Golden Knights" ||
      westPost.team === "Kings" ||
      westPost.team === "Kraken" ||
      westPost.team === "Oilers" ||
      westPost.team === "Sharks"
  );

  // NHL DIVISONS
  // West Central
  const nhlWestCentralPostsList = nhlWestPostsList.filter(
    (centralPost) =>
      centralPost.team === "Avalanche" ||
      centralPost.team === "Blackhawks" ||
      centralPost.team === "Blues" ||
      centralPost.team === "Coyotes" ||
      centralPost.team === "Jets" ||
      centralPost.team === "Predators" ||
      centralPost.team === "Stars" ||
      centralPost.team === "Wild"
  );
  // West Central Teams
  const avalanchePostsList = nhlWestCentralPostsList.filter(
    (avalanchePost) => avalanchePost.team === "Avalanche"
  );
  const blackhawksPostsList = nhlWestCentralPostsList.filter(
    (blackhawksPost) => blackhawksPost.team === "Blackhawks"
  );
  const bluesPostsList = nhlWestCentralPostsList.filter(
    (bluesPost) => bluesPost.team === "Blues"
  );
  const coyotesPostsList = nhlWestCentralPostsList.filter(
    (coyotesPost) => coyotesPost.team === "Coyotes"
  );
  const jetsPostsList = nhlWestCentralPostsList.filter(
    (jetsPost) => jetsPost.team === "Jets"
  );
  const predatorsPostsList = nhlWestCentralPostsList.filter(
    (predatorsPost) => predatorsPost.team === "Predators"
  );
  const starsPostsList = nhlWestCentralPostsList.filter(
    (starsPost) => starsPost.team === "Stars"
  );
  const wildPostsList = nhlWestCentralPostsList.filter(
    (wildPost) => wildPost.team === "Wild"
  );

  // West Pacific
  const nhlWestPacificPostsList = nhlWestPostsList.filter(
    (pacificPost) =>
      pacificPost.team === "Canucks" ||
      pacificPost.team === "Ducks" ||
      pacificPost.team === "Flames" ||
      pacificPost.team === "Golden Knights" ||
      pacificPost.team === "Kings" ||
      pacificPost.team === "Kraken" ||
      pacificPost.team === "Oilers" ||
      pacificPost.team === "Sharks"
  );
  // West Pacific Teams
  const canucksPostsList = nhlWestPacificPostsList.filter(
    (canucksPost) => canucksPost.team === "Canucks"
  );
  const ducksPostsList = nhlWestPacificPostsList.filter(
    (ducksPost) => ducksPost.team === "Ducks"
  );
  const flamesPostsList = nhlWestPacificPostsList.filter(
    (flamesPost) => flamesPost.team === "Flames"
  );
  const goldenKnightsPostsList = nhlWestPacificPostsList.filter(
    (goldenKnightsPost) => goldenKnightsPost.team === "Golden Knights"
  );
  const kingssPostsList = nhlWestPacificPostsList.filter(
    (kingssPost) => kingssPost.team === "Kings"
  );
  const krakenPostsList = nhlWestPacificPostsList.filter(
    (krakenPost) => krakenPost.team === "Kraken"
  );
  const oilersPostsList = nhlWestPacificPostsList.filter(
    (oilersPost) => oilersPost.team === "Oilers"
  );
  const sharksPostsList = nhlWestPacificPostsList.filter(
    (sharksPost) => sharksPost.team === "Sharks"
  );

  return (
    <div className="nhlPosts">
      <div className="nhlPosts__header">
        <div className="nhlPosts__sortBy">
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
        <div className="nhlPosts__filterBy">
          <div className="filterBy__header">
            <h6>Filter By: </h6>
          </div>
          <div className="filterBy__options">
            <div className="filterBy__nhl">
              <span onClick={handleNhlClick} className={nhlFilter ? "nhl" : ""}>
                NHL
              </span>
            </div>
            <div className="filterBy__nhlConference">
              <div className="filterBy__optionsDivider"></div>
              <span
                onClick={() => handleNhlConferenceClick(1)}
                className={nhlConferenceFilter === 1 ? "east" : ""}
              >
                EAST
              </span>
              <div className="filterBy__optionsDot"></div>
              <span
                onClick={() => handleNhlConferenceClick(2)}
                className={nhlConferenceFilter === 2 ? "west" : ""}
              >
                WEST
              </span>
            </div>
            {/* NBA Divisions Start */}
            {nhlConferenceFilter === 1 && (
              <div className="filterBy__nhlDivision">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleNhlDivisionClick(1)}
                  className={nhlDivisionFilter === 1 ? "atlantic" : ""}
                >
                  ATLANTIC
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlDivisionClick(2)}
                  className={nhlDivisionFilter === 2 ? "metropolitan" : ""}
                >
                  METRO
                </span>
              </div>
            )}
            {nhlConferenceFilter === 2 && (
              <div className="filterBy__nhlDivision">
                <div className="filterBy__optionsDivider"></div>

                <span
                  onClick={() => handleNhlDivisionClick(3)}
                  className={nhlDivisionFilter === 3 ? "central" : ""}
                >
                  CENTRAL
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlDivisionClick(4)}
                  className={nhlDivisionFilter === 4 ? "pacific" : ""}
                >
                  PACIFIC
                </span>
              </div>
            )}

            {/* NHL Divisions End */}
            {/* NHL Teams Start */}
            {/* EAST ATLANTIC TEAMS */}
            {nhlConferenceFilter === 1 && nhlDivisionFilter === 1 && (
              <div className="filterBy__nhlTeam ">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleNhlTeamClick(111)}
                  className={nhlTeamFilter === 111 ? "nhl-bruins" : ""}
                >
                  BRUINS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlTeamClick(112)}
                  className={nhlTeamFilter === 112 ? "nhl-canadiens" : ""}
                >
                  CANADIENS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlTeamClick(113)}
                  className={nhlTeamFilter === 113 ? "nhl-lightning" : ""}
                >
                  LIGHTNING
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlTeamClick(114)}
                  className={nhlTeamFilter === 114 ? "nhl-mapleleafs" : ""}
                >
                  LEAFS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlTeamClick(115)}
                  className={nhlTeamFilter === 115 ? "nhl-panthers" : ""}
                >
                  PANTHERS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlTeamClick(116)}
                  className={nhlTeamFilter === 116 ? "nhl-redwings" : ""}
                >
                  WINGS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlTeamClick(117)}
                  className={nhlTeamFilter === 117 ? "nhl-sabres" : ""}
                >
                  SABRES
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlTeamClick(118)}
                  className={nhlTeamFilter === 118 ? "nhl-senators" : ""}
                >
                  SENATORS
                </span>
              </div>
            )}
            {/* EAST METROPOLITAN TEAMS */}

            {nhlConferenceFilter === 1 && nhlDivisionFilter === 2 && (
              <div className="filterBy__nhlTeam ">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleNhlTeamClick(121)}
                  className={nhlTeamFilter === 121 ? "nhl-bluejackets" : ""}
                >
                  CBJ
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlTeamClick(122)}
                  className={nhlTeamFilter === 122 ? "nhl-capitals" : ""}
                >
                  CAPITALS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlTeamClick(123)}
                  className={nhlTeamFilter === 123 ? "nhl-devils" : ""}
                >
                  DEVILS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlTeamClick(124)}
                  className={nhlTeamFilter === 124 ? "nhl-flyers" : ""}
                >
                  FLYERS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlTeamClick(125)}
                  className={nhlTeamFilter === 125 ? "nhl-hurricanes" : ""}
                >
                  HURRICANES
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlTeamClick(126)}
                  className={nhlTeamFilter === 126 ? "nhl-islanders" : ""}
                >
                  ISLANDERS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlTeamClick(127)}
                  className={nhlTeamFilter === 127 ? "nhl-penguins" : ""}
                >
                  PENGUINS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlTeamClick(128)}
                  className={nhlTeamFilter === 128 ? "nhl-rangers" : ""}
                >
                  RANGERS
                </span>
              </div>
            )}
            {/* WEST CENTRAL TEAMS */}

            {nhlConferenceFilter === 2 && nhlDivisionFilter === 3 && (
              <div className="filterBy__nhlTeam ">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleNhlTeamClick(231)}
                  className={nhlTeamFilter === 231 ? "nhl-avalanche" : ""}
                >
                  AVALANCHE
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlTeamClick(232)}
                  className={nhlTeamFilter === 232 ? "nhl-blackhawks" : ""}
                >
                  BLACKHAWKS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlTeamClick(233)}
                  className={nhlTeamFilter === 233 ? "nhl-blues" : ""}
                >
                  BLUES
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlTeamClick(234)}
                  className={nhlTeamFilter === 234 ? "nhl-coyotes" : ""}
                >
                  COYOTES
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlTeamClick(235)}
                  className={nhlTeamFilter === 235 ? "nhl-jets" : ""}
                >
                  JETS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlTeamClick(236)}
                  className={nhlTeamFilter === 236 ? "nhl-predators" : ""}
                >
                  PREDS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlTeamClick(237)}
                  className={nhlTeamFilter === 237 ? "nhl-stars" : ""}
                >
                  STARS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlTeamClick(238)}
                  className={nhlTeamFilter === 238 ? "nhl-wild" : ""}
                >
                  WILD
                </span>
              </div>
            )}
            {/* WEST PACIFIC TEAMS */}

            {nhlConferenceFilter === 2 && nhlDivisionFilter === 4 && (
              <div className="filterBy__nhlTeam ">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleNhlTeamClick(241)}
                  className={nhlTeamFilter === 241 ? "nhl-canucks" : ""}
                >
                  CANUCKS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlTeamClick(242)}
                  className={nhlTeamFilter === 242 ? "nhl-ducks" : ""}
                >
                  DUCKS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlTeamClick(243)}
                  className={nhlTeamFilter === 243 ? "nhl-flames" : ""}
                >
                  FLAMES
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlTeamClick(244)}
                  className={nhlTeamFilter === 244 ? "nhl-goldenknights" : ""}
                >
                  KNIGHTS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlTeamClick(245)}
                  className={nhlTeamFilter === 245 ? "nhl-kings" : ""}
                >
                  KINGS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlTeamClick(246)}
                  className={nhlTeamFilter === 246 ? "nhl-kraken" : ""}
                >
                  KRAKEN
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlTeamClick(247)}
                  className={nhlTeamFilter === 247 ? "nhl-oilers" : ""}
                >
                  OILERS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNhlTeamClick(248)}
                  className={nhlTeamFilter === 248 ? "nhl-sharks" : ""}
                >
                  SHARKS
                </span>
              </div>
            )}

            {/* NHL Teams End */}
          </div>
        </div>
      </div>
      <div className="nflPosts__main">
        <div className="nflPosts__pageLinks">
          <Link to="/mlb" className="link">
            <i className="fas fa-baseball-ball"></i>
          </Link>
          <Link to="/nba" className="link">
            <i className="fas fa-basketball-ball"></i>
          </Link>
          <Link to="/nfl" className="link">
            <i className="fas fa-football-ball"></i>
          </Link>
          <Link to="/nhl" className="link active">
            <i className="fas fa-hockey-puck"></i>
          </Link>
          <div className="link__divider"></div>
          <Link to="/addpost" className="link addpost">
            <i className="fas fa-plus-circle"></i>
            <span>Add Post</span>
          </Link>
        </div>
        <div
          className={sortBy ? "nflPosts__list newest" : "nflPosts__list oldest"}
        >
          {/* NHL POSTS */}
          {nhlFilter &&
            nhlConferenceFilter === 0 &&
            nhlDivisionFilter === 0 &&
            nhlTeamFilter === 0 && (
              <>
                {nhlPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* NHL CONFERENCES */}

          {/* EAST */}
          {nhlFilter &&
            nhlConferenceFilter === 1 &&
            nhlDivisionFilter === 0 &&
            nhlTeamFilter === 0 && (
              <>
                {nhlEastPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* WEST */}
          {nhlFilter &&
            nhlConferenceFilter === 2 &&
            nhlDivisionFilter === 0 &&
            nhlTeamFilter === 0 && (
              <>
                {nhlWestPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* NHL DIVISIONS */}

          {/* EAST ATLANTIC  */}

          {nhlFilter &&
            nhlConferenceFilter === 1 &&
            nhlDivisionFilter === 1 &&
            nhlTeamFilter === 0 && (
              <>
                {nhlEastAtlanticPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}

          {/* EAST METROPOLITAN */}

          {nhlFilter &&
            nhlConferenceFilter === 1 &&
            nhlDivisionFilter === 2 &&
            nhlTeamFilter === 0 && (
              <>
                {nhlEastMetropolitanPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* WEST CENTAL  */}
          {nhlFilter &&
            nhlConferenceFilter === 2 &&
            nhlDivisionFilter === 3 &&
            nhlTeamFilter === 0 && (
              <>
                {nhlWestCentralPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* WEST PACIFIC  */}
          {nhlFilter &&
            nhlConferenceFilter === 2 &&
            nhlDivisionFilter === 4 &&
            nhlTeamFilter === 0 && (
              <>
                {nhlWestPacificPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* EAST ATLANTIC TEAMS */}
          {nhlFilter &&
            nhlConferenceFilter === 1 &&
            nhlDivisionFilter === 1 &&
            nhlTeamFilter === 111 && (
              <>
                {bruinsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {nhlFilter &&
            nhlConferenceFilter === 1 &&
            nhlDivisionFilter === 1 &&
            nhlTeamFilter === 112 && (
              <>
                {canadiensPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {nhlFilter &&
            nhlConferenceFilter === 1 &&
            nhlDivisionFilter === 1 &&
            nhlTeamFilter === 113 && (
              <>
                {lightningPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {nhlFilter &&
            nhlConferenceFilter === 1 &&
            nhlDivisionFilter === 1 &&
            nhlTeamFilter === 114 && (
              <>
                {mapleLeafssPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {nhlFilter &&
            nhlConferenceFilter === 1 &&
            nhlDivisionFilter === 1 &&
            nhlTeamFilter === 115 && (
              <>
                {panthersPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {nhlFilter &&
            nhlConferenceFilter === 1 &&
            nhlDivisionFilter === 1 &&
            nhlTeamFilter === 116 && (
              <>
                {redWingsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {nhlFilter &&
            nhlConferenceFilter === 1 &&
            nhlDivisionFilter === 1 &&
            nhlTeamFilter === 117 && (
              <>
                {sabresPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {nhlFilter &&
            nhlConferenceFilter === 1 &&
            nhlDivisionFilter === 1 &&
            nhlTeamFilter === 118 && (
              <>
                {senatorsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* EAST METRO TEAMS */}
          {nhlFilter &&
            nhlConferenceFilter === 1 &&
            nhlDivisionFilter === 2 &&
            nhlTeamFilter === 121 && (
              <>
                {blueJacketsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {nhlFilter &&
            nhlConferenceFilter === 1 &&
            nhlDivisionFilter === 2 &&
            nhlTeamFilter === 122 && (
              <>
                {capitalsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {nhlFilter &&
            nhlConferenceFilter === 1 &&
            nhlDivisionFilter === 2 &&
            nhlTeamFilter === 123 && (
              <>
                {devilsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {nhlFilter &&
            nhlConferenceFilter === 1 &&
            nhlDivisionFilter === 2 &&
            nhlTeamFilter === 124 && (
              <>
                {flyersPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {nhlFilter &&
            nhlConferenceFilter === 1 &&
            nhlDivisionFilter === 2 &&
            nhlTeamFilter === 125 && (
              <>
                {hurricanesPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {nhlFilter &&
            nhlConferenceFilter === 1 &&
            nhlDivisionFilter === 2 &&
            nhlTeamFilter === 126 && (
              <>
                {islandersPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {nhlFilter &&
            nhlConferenceFilter === 1 &&
            nhlDivisionFilter === 2 &&
            nhlTeamFilter === 127 && (
              <>
                {penguinsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {nhlFilter &&
            nhlConferenceFilter === 1 &&
            nhlDivisionFilter === 2 &&
            nhlTeamFilter === 128 && (
              <>
                {rangersPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* WEST CENTRAL TEAMS */}
          {nhlFilter &&
            nhlConferenceFilter === 2 &&
            nhlDivisionFilter === 3 &&
            nhlTeamFilter === 231 && (
              <>
                {avalanchePostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {nhlFilter &&
            nhlConferenceFilter === 2 &&
            nhlDivisionFilter === 3 &&
            nhlTeamFilter === 232 && (
              <>
                {blackhawksPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {nhlFilter &&
            nhlConferenceFilter === 2 &&
            nhlDivisionFilter === 3 &&
            nhlTeamFilter === 233 && (
              <>
                {bluesPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {nhlFilter &&
            nhlConferenceFilter === 2 &&
            nhlDivisionFilter === 3 &&
            nhlTeamFilter === 234 && (
              <>
                {coyotesPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {nhlFilter &&
            nhlConferenceFilter === 2 &&
            nhlDivisionFilter === 3 &&
            nhlTeamFilter === 235 && (
              <>
                {jetsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {nhlFilter &&
            nhlConferenceFilter === 2 &&
            nhlDivisionFilter === 3 &&
            nhlTeamFilter === 236 && (
              <>
                {predatorsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {nhlFilter &&
            nhlConferenceFilter === 2 &&
            nhlDivisionFilter === 3 &&
            nhlTeamFilter === 237 && (
              <>
                {starsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {nhlFilter &&
            nhlConferenceFilter === 2 &&
            nhlDivisionFilter === 3 &&
            nhlTeamFilter === 238 && (
              <>
                {wildPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* WEST PACIFIC TEAMS */}
          {nhlFilter &&
            nhlConferenceFilter === 2 &&
            nhlDivisionFilter === 4 &&
            nhlTeamFilter === 241 && (
              <>
                {canucksPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {nhlFilter &&
            nhlConferenceFilter === 2 &&
            nhlDivisionFilter === 4 &&
            nhlTeamFilter === 242 && (
              <>
                {ducksPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {nhlFilter &&
            nhlConferenceFilter === 2 &&
            nhlDivisionFilter === 4 &&
            nhlTeamFilter === 243 && (
              <>
                {flamesPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {nhlFilter &&
            nhlConferenceFilter === 2 &&
            nhlDivisionFilter === 4 &&
            nhlTeamFilter === 244 && (
              <>
                {goldenKnightsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {nhlFilter &&
            nhlConferenceFilter === 2 &&
            nhlDivisionFilter === 4 &&
            nhlTeamFilter === 245 && (
              <>
                {kingssPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {nhlFilter &&
            nhlConferenceFilter === 2 &&
            nhlDivisionFilter === 4 &&
            nhlTeamFilter === 246 && (
              <>
                {krakenPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {nhlFilter &&
            nhlConferenceFilter === 2 &&
            nhlDivisionFilter === 4 &&
            nhlTeamFilter === 247 && (
              <>
                {oilersPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {nhlFilter &&
            nhlConferenceFilter === 2 &&
            nhlDivisionFilter === 4 &&
            nhlTeamFilter === 248 && (
              <>
                {sharksPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
        </div>
      </div>
    </div>
  );
};

export default NFLPosts;
