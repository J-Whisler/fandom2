import React, { useState, useEffect } from "react";
import "./NFLPosts.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import PostCard from "../../components/PostCard/PostCard";

const NFLPosts = () => {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [sortBy, setSortBy] = useState(false);
  const [nflFilter, setNflFilter] = useState(true);
  const [nflConferenceFilter, setNflConferenceFilter] = useState(0);
  const [nflDivisionFilter, setNflDivisionFilter] = useState(0);
  const [nflTeamFilter, setNflTeamFilter] = useState(0);

  // Get Posts
  useEffect(() => {
    axios.get("http://localhost:2323/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  // Get NBA Posts
  const nflPostsList = listOfPosts.filter(
    (nflPost) => nflPost.league === "NFL"
  );

  // Handle Click Events
  const handleNflClick = () => {
    setNflFilter(true);
    setNflConferenceFilter(0);
    setNflDivisionFilter(0);
    setNflTeamFilter(0);
  };

  const handleNflConferenceClick = (index) => {
    setNflConferenceFilter(index);
    setNflDivisionFilter(0);
    setNflTeamFilter(0);
  };

  const handleNflDivisionClick = (index) => {
    setNflDivisionFilter(index);
    setNflTeamFilter(0);
  };

  const handleNflTeamClick = (index) => {
    setNflTeamFilter(index);
  };

  // Filters
  // AFC
  const nflAfcPostsList = nflPostsList.filter(
    (afcPost) =>
      afcPost.team === "Bengals" ||
      afcPost.team === "Browns" ||
      afcPost.team === "Ravens" ||
      afcPost.team === "Steelers" ||
      afcPost.team === "Colts" ||
      afcPost.team === "Jaguars" ||
      afcPost.team === "Texans" ||
      afcPost.team === "Titans" ||
      afcPost.team === "Bills" ||
      afcPost.team === "Dolphins" ||
      afcPost.team === "Jets" ||
      afcPost.team === "Patriots" ||
      afcPost.team === "Broncos" ||
      afcPost.team === "Chargers" ||
      afcPost.team === "Chiefs" ||
      afcPost.team === "Raiders"
  );
  // AFC DIVISIONS
  // AFC North
  const nflAfcNorthPostsList = nflAfcPostsList.filter(
    (afcNorthPost) =>
      afcNorthPost.team === "Bengals" ||
      afcNorthPost.team === "Browns" ||
      afcNorthPost.team === "Ravens" ||
      afcNorthPost.team === "Steelers"
  );
  // Afc North Teams
  const bengalsPostsList = nflAfcNorthPostsList.filter(
    (bengalsPost) => bengalsPost.team === "Bengals"
  );
  const brownsPostsList = nflAfcNorthPostsList.filter(
    (brownsPost) => brownsPost.team === "Browns"
  );
  const ravensPostsList = nflAfcNorthPostsList.filter(
    (ravensPost) => ravensPost.team === "Ravens"
  );
  const steelersPostsList = nflAfcNorthPostsList.filter(
    (steelersPost) => steelersPost.team === "Steelers"
  );

  // Afc East
  const nflAfcEastPostsList = nflAfcPostsList.filter(
    (afcEastPost) =>
      afcEastPost.team === "Bills" ||
      afcEastPost.team === "Dolphins" ||
      afcEastPost.team === "Jets" ||
      afcEastPost.team === "Patriots"
  );
  // Afc East Teams
  const billsPostsList = nflAfcEastPostsList.filter(
    (billsPost) => billsPost.team === "Bills"
  );
  const dolphinsPostsList = nflAfcEastPostsList.filter(
    (dolhpinsPost) => dolhpinsPost.team === "Dolphins"
  );
  const jetsPostsList = nflAfcEastPostsList.filter(
    (jetsPost) => jetsPost.team === "Jets"
  );
  const patriotsPostsList = nflAfcEastPostsList.filter(
    (patriotsPost) => patriotsPost.team === "Patriots"
  );

  // Afc South
  const nflAfcSouthPostsList = nflAfcPostsList.filter(
    (afcSouthPost) =>
      afcSouthPost.team === "Colts" ||
      afcSouthPost.team === "Jaguars" ||
      afcSouthPost.team === "Texans" ||
      afcSouthPost.team === "Titans"
  );

  // Afc South Teams
  const coltsPostsList = nflAfcSouthPostsList.filter(
    (coltsPost) => coltsPost.team === "Colts"
  );
  const jaguarsPostsList = nflAfcSouthPostsList.filter(
    (jaguarsPost) => jaguarsPost.team === "Jaguars"
  );
  const texansPostsList = nflAfcSouthPostsList.filter(
    (texansPost) => texansPost.team === "Texans"
  );
  const titansPostsList = nflAfcSouthPostsList.filter(
    (titansPost) => titansPost.team === "Titans"
  );

  // Afc West
  const nflAfcWestPostsList = nflAfcPostsList.filter(
    (afcWestPost) =>
      afcWestPost.team === "Broncos" ||
      afcWestPost.team === "Chargers" ||
      afcWestPost.team === "Chiefs" ||
      afcWestPost.team === "Raiders"
  );
  // Afc West Teams
  const broncsPostsList = nflAfcWestPostsList.filter(
    (broncosPost) => broncosPost.team === "Broncos"
  );
  const chargersPostsList = nflAfcWestPostsList.filter(
    (chargersPost) => chargersPost.team === "Chargers"
  );
  const chiefsPostsList = nflAfcWestPostsList.filter(
    (cheifsPost) => cheifsPost.team === "Chiefs"
  );
  const raidersPostsList = nflAfcWestPostsList.filter(
    (raidersPost) => raidersPost.team === "Raiders"
  );

  //   NFC
  const nflNfcPostsList = nflPostsList.filter(
    (nfcPost) =>
      nfcPost.team === "Bears" ||
      nfcPost.team === "Lions" ||
      nfcPost.team === "Packers" ||
      nfcPost.team === "Vikings" ||
      nfcPost.team === "Cowboys" ||
      nfcPost.team === "Eagles" ||
      nfcPost.team === "Football Team" ||
      nfcPost.team === "Giants" ||
      nfcPost.team === "Buccaneers" ||
      nfcPost.team === "Falcons" ||
      nfcPost.team === "Panthers" ||
      nfcPost.team === "Saints" ||
      nfcPost.team === "Niners" ||
      nfcPost.team === "Cardinals" ||
      nfcPost.team === "Rams" ||
      nfcPost.team === "Seahawks"
  );

  // NFC DIVISONS
  // Nfc North
  const nflNfcNorthPostsList = nflNfcPostsList.filter(
    (nfcNorthPost) =>
      nfcNorthPost.team === "Bears" ||
      nfcNorthPost.team === "Lions" ||
      nfcNorthPost.team === "Packers" ||
      nfcNorthPost.team === "Vikings"
  );
  // Nfc North Teams
  const bearsPostsList = nflNfcNorthPostsList.filter(
    (bearsPost) => bearsPost.team === "Bears"
  );
  const lionsPostsList = nflNfcNorthPostsList.filter(
    (lionsPost) => lionsPost.team === "Lions"
  );
  const packersPostsList = nflNfcNorthPostsList.filter(
    (packersPost) => packersPost.team === "Packers"
  );
  const vikingsPostsList = nflNfcNorthPostsList.filter(
    (vikingsPost) => vikingsPost.team === "Vikings"
  );

  // Nfc East
  const nflNfcEastPostsList = nflNfcPostsList.filter(
    (nfcEastPost) =>
      nfcEastPost.team === "Cowboys" ||
      nfcEastPost.team === "Eagles" ||
      nfcEastPost.team === "Football Team" ||
      nfcEastPost.team === "Giants"
  );
  // Nfc East Teams
  const cowboysPostsList = nflNfcEastPostsList.filter(
    (cowboysPost) => cowboysPost.team === "Cowboys"
  );
  const eaglesPostsList = nflNfcEastPostsList.filter(
    (eaglesPost) => eaglesPost.team === "Eagles"
  );
  const footballTeamPostsList = nflNfcEastPostsList.filter(
    (footballTeamPost) => footballTeamPost.team === "Football Team"
  );
  const giantsPostsList = nflNfcEastPostsList.filter(
    (giantsPost) => giantsPost.team === "Giants"
  );

  // Nfc South
  const nflNfcSouthPostsList = nflNfcPostsList.filter(
    (nfcSouthPost) =>
      nfcSouthPost.team === "Buccaneers" ||
      nfcSouthPost.team === "Falcons" ||
      nfcSouthPost.team === "Panthers" ||
      nfcSouthPost.team === "Saints"
  );
  // Nfc South teams
  const buccaneerssPostsList = nflNfcSouthPostsList.filter(
    (buccaneersPost) => buccaneersPost.team === "Buccaneers"
  );
  const falconsPostsList = nflNfcSouthPostsList.filter(
    (falconsPost) => falconsPost.team === "Falcons"
  );
  const panthersPostsList = nflNfcSouthPostsList.filter(
    (panthersPost) => panthersPost.team === "Panthers"
  );
  const saintsPostsList = nflNfcSouthPostsList.filter(
    (saintsPost) => saintsPost.team === "Saints"
  );

  // Nfc West
  const nflNfcWestPostsList = nflNfcPostsList.filter(
    (nfcWestPost) =>
      nfcWestPost.team === "Niners" ||
      nfcWestPost.team === "Cardinals" ||
      nfcWestPost.team === "Rams" ||
      nfcWestPost.team === "Seahawks"
  );
  // Nfc West teams
  const ninersPostsList = nflNfcWestPostsList.filter(
    (ninersPost) => ninersPost.team === "Niners"
  );
  const cardinalsPostsList = nflNfcWestPostsList.filter(
    (cardinalsPost) => cardinalsPost.team === "Cardinals"
  );
  const ramsPostsList = nflNfcWestPostsList.filter(
    (ramsPost) => ramsPost.team === "Rams"
  );
  const seahawksPostsList = nflNfcWestPostsList.filter(
    (seahawksPost) => seahawksPost.team === "Seahawks"
  );

  return (
    <div className="nflPosts">
      <div className="nflPosts__header">
        <div className="nflPosts__sortBy">
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
        <div className="nflPosts__filterBy">
          <div className="filterBy__header">
            <h6>Filter By: </h6>
          </div>
          <div className="filterBy__options">
            <div className="filterBy__nfl">
              <span onClick={handleNflClick} className={nflFilter ? "nfl" : ""}>
                NFL
              </span>
            </div>
            <div className="filterBy__nflConference">
              <div className="filterBy__optionsDivider"></div>
              <span
                onClick={() => handleNflConferenceClick(1)}
                className={nflConferenceFilter === 1 ? "afc" : ""}
              >
                AFC
              </span>
              <div className="filterBy__optionsDot"></div>
              <span
                onClick={() => handleNflConferenceClick(2)}
                className={nflConferenceFilter === 2 ? "nfc" : ""}
              >
                NFC
              </span>
            </div>
            {/* NBA Divisions Start */}
            {nflConferenceFilter !== 0 && (
              <div className="filterBy__nflDivision">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleNflDivisionClick(1)}
                  className={nflDivisionFilter === 1 ? "north" : ""}
                >
                  NORTH
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNflDivisionClick(2)}
                  className={nflDivisionFilter === 2 ? "south" : ""}
                >
                  SOUTH
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNflDivisionClick(3)}
                  className={nflDivisionFilter === 3 ? "east" : ""}
                >
                  EAST
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNflDivisionClick(4)}
                  className={nflDivisionFilter === 4 ? "west" : ""}
                >
                  WEST
                </span>
              </div>
            )}

            {/* NFL Divisions End */}
            {/* NFL Teams Start */}
            {/* AFC  NORTH */}
            {nflConferenceFilter === 1 && nflDivisionFilter === 1 && (
              <div className="filterBy__nflTeam ">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleNflTeamClick(111)}
                  className={nflTeamFilter === 111 ? "nfl-bengals" : ""}
                >
                  BENGALS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNflTeamClick(112)}
                  className={nflTeamFilter === 112 ? "nfl-browns" : ""}
                >
                  BROWNS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNflTeamClick(113)}
                  className={nflTeamFilter === 113 ? "nfl-ravens" : ""}
                >
                  RAVENS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNflTeamClick(114)}
                  className={nflTeamFilter === 114 ? "nfl-steelers" : ""}
                >
                  STEELERS
                </span>
              </div>
            )}
            {/* AFC South */}
            {nflConferenceFilter === 1 && nflDivisionFilter === 2 && (
              <div className="filterBy__nflTeam ">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleNflTeamClick(121)}
                  className={nflTeamFilter === 121 ? "nfl-colts" : ""}
                >
                  COLTS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNflTeamClick(122)}
                  className={nflTeamFilter === 122 ? "nfl-jaguars" : ""}
                >
                  JAGUARS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNflTeamClick(123)}
                  className={nflTeamFilter === 123 ? "nfl-texans" : ""}
                >
                  TEXANS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNflTeamClick(124)}
                  className={nflTeamFilter === 124 ? "nfl-titans" : ""}
                >
                  TITANS
                </span>
              </div>
            )}
            {/* AFC East */}
            {nflConferenceFilter === 1 && nflDivisionFilter === 3 && (
              <div className="filterBy__nflTeam ">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleNflTeamClick(131)}
                  className={nflTeamFilter === 131 ? "nfl-bills" : ""}
                >
                  BILLS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNflTeamClick(132)}
                  className={nflTeamFilter === 132 ? "nfl-dolphins" : ""}
                >
                  DOLPHINS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNflTeamClick(133)}
                  className={nflTeamFilter === 133 ? "nfl-jets" : ""}
                >
                  JETS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNflTeamClick(134)}
                  className={nflTeamFilter === 134 ? "nfl-patriots" : ""}
                >
                  PATRIOTS
                </span>
              </div>
            )}
            {/* AFC West */}
            {nflConferenceFilter === 1 && nflDivisionFilter === 4 && (
              <div className="filterBy__nflTeam ">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleNflTeamClick(141)}
                  className={nflTeamFilter === 141 ? "nfl-broncos" : ""}
                >
                  BRONCOS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNflTeamClick(142)}
                  className={nflTeamFilter === 142 ? "nfl-chargers" : ""}
                >
                  CHARGERS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNflTeamClick(143)}
                  className={nflTeamFilter === 143 ? "nfl-chiefs" : ""}
                >
                  CHIEFS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNflTeamClick(144)}
                  className={nflTeamFilter === 144 ? "nfl-raiders" : ""}
                >
                  RAIDERS
                </span>
              </div>
            )}
            {/* NFC North */}
            {nflConferenceFilter === 2 && nflDivisionFilter === 1 && (
              <div className="filterBy__nflTeam ">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleNflTeamClick(211)}
                  className={nflTeamFilter === 211 ? "nfl-bears" : ""}
                >
                  BEARS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNflTeamClick(212)}
                  className={nflTeamFilter === 212 ? "nfl-lions" : ""}
                >
                  LIONS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNflTeamClick(213)}
                  className={nflTeamFilter === 213 ? "nfl-packers" : ""}
                >
                  PACKERS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNflTeamClick(214)}
                  className={nflTeamFilter === 214 ? "nfl-vikings" : ""}
                >
                  VIKINGS
                </span>
              </div>
            )}
            {/* NFC South */}
            {nflConferenceFilter === 2 && nflDivisionFilter === 2 && (
              <div className="filterBy__nflTeam ">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleNflTeamClick(221)}
                  className={nflTeamFilter === 221 ? "nfl-buccaneers" : ""}
                >
                  BUCCANEERS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNflTeamClick(222)}
                  className={nflTeamFilter === 222 ? "nfl-falcons" : ""}
                >
                  FALCONS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNflTeamClick(223)}
                  className={nflTeamFilter === 223 ? "nfl-panthers" : ""}
                >
                  PANTHERS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNflTeamClick(224)}
                  className={nflTeamFilter === 224 ? "nfl-saints" : ""}
                >
                  SAINTS
                </span>
              </div>
            )}
            {/* NFC East */}
            {nflConferenceFilter === 2 && nflDivisionFilter === 3 && (
              <div className="filterBy__nflTeam ">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleNflTeamClick(231)}
                  className={nflTeamFilter === 231 ? "nfl-cowboys" : ""}
                >
                  COWBOYS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNflTeamClick(232)}
                  className={nflTeamFilter === 232 ? "nfl-eagles" : ""}
                >
                  EAGLES
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNflTeamClick(233)}
                  className={nflTeamFilter === 233 ? "nfl-footballteam" : ""}
                >
                  FOOTBALL TEAM
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNflTeamClick(234)}
                  className={nflTeamFilter === 234 ? "nfl-giants" : ""}
                >
                  GIANTS
                </span>
              </div>
            )}
            {/* NFC West */}
            {nflConferenceFilter === 2 && nflDivisionFilter === 4 && (
              <div className="filterBy__nflTeam ">
                <div className="filterBy__optionsDivider"></div>
                <span
                  onClick={() => handleNflTeamClick(241)}
                  className={nflTeamFilter === 241 ? "nfl-niners" : ""}
                >
                  NINERS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNflTeamClick(242)}
                  className={nflTeamFilter === 242 ? "nfl-cardinals" : ""}
                >
                  CARDINALS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNflTeamClick(243)}
                  className={nflTeamFilter === 243 ? "nfl-rams" : ""}
                >
                  RAMS
                </span>
                <div className="filterBy__optionsDot"></div>
                <span
                  onClick={() => handleNflTeamClick(244)}
                  className={nflTeamFilter === 244 ? "nfl-seahawks" : ""}
                >
                  SEAHAWKS
                </span>
              </div>
            )}
            {/* NFL Teams End */}
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
          <Link to="/nfl" className="link active">
            <i className="fas fa-football-ball"></i>
          </Link>
          <Link to="/nhl" className="link">
            <i className="fas fa-hockey-puck"></i>
          </Link>
        </div>
        <div
          className={sortBy ? "nflPosts__list newest" : "nflPosts__list oldest"}
        >
          {/* NFL POSTS */}
          {nflFilter &&
            nflConferenceFilter === 0 &&
            nflDivisionFilter === 0 &&
            nflTeamFilter === 0 && (
              <>
                {nflPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}

          {/* NFL AFC POSTS */}
          {nflFilter &&
            nflConferenceFilter === 1 &&
            nflDivisionFilter === 0 &&
            nflTeamFilter === 0 && (
              <>
                {nflAfcPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* NFL NFC POSTS */}
          {nflFilter &&
            nflConferenceFilter === 2 &&
            nflDivisionFilter === 0 &&
            nflTeamFilter === 0 && (
              <>
                {nflNfcPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* NFL DIVISIONS */}
          {/* NFL AFC NORTH */}
          {nflFilter &&
            nflConferenceFilter === 1 &&
            nflDivisionFilter === 1 &&
            nflTeamFilter === 0 && (
              <>
                {nflAfcNorthPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* NFL AFC SOUTH */}
          {nflFilter &&
            nflConferenceFilter === 1 &&
            nflDivisionFilter === 2 &&
            nflTeamFilter === 0 && (
              <>
                {nflAfcSouthPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* NFL AFC EAST */}
          {nflFilter &&
            nflConferenceFilter === 1 &&
            nflDivisionFilter === 3 &&
            nflTeamFilter === 0 && (
              <>
                {nflAfcEastPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* NFL AFC WEST */}
          {nflFilter &&
            nflConferenceFilter === 1 &&
            nflDivisionFilter === 4 &&
            nflTeamFilter === 0 && (
              <>
                {nflAfcWestPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* NFL NFC NORTH */}
          {nflFilter &&
            nflConferenceFilter === 2 &&
            nflDivisionFilter === 1 &&
            nflTeamFilter === 0 && (
              <>
                {nflNfcNorthPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* NFL NFC SOUTH */}
          {nflFilter &&
            nflConferenceFilter === 2 &&
            nflDivisionFilter === 2 &&
            nflTeamFilter === 0 && (
              <>
                {nflNfcSouthPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* NFL NFC EAST */}
          {nflFilter &&
            nflConferenceFilter === 2 &&
            nflDivisionFilter === 3 &&
            nflTeamFilter === 0 && (
              <>
                {nflNfcEastPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* NFL NFC WEST */}
          {nflFilter &&
            nflConferenceFilter === 2 &&
            nflDivisionFilter === 4 &&
            nflTeamFilter === 0 && (
              <>
                {nflNfcWestPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}

          {/* AFC NORTH TEAMS */}
          {/* Bengals */}
          {nflFilter &&
            nflConferenceFilter === 1 &&
            nflDivisionFilter === 1 &&
            nflTeamFilter === 111 && (
              <>
                {bengalsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Browns */}
          {nflFilter &&
            nflConferenceFilter === 1 &&
            nflDivisionFilter === 1 &&
            nflTeamFilter === 112 && (
              <>
                {brownsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Ravens */}
          {nflFilter &&
            nflConferenceFilter === 1 &&
            nflDivisionFilter === 1 &&
            nflTeamFilter === 113 && (
              <>
                {ravensPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Steelers */}
          {nflFilter &&
            nflConferenceFilter === 1 &&
            nflDivisionFilter === 1 &&
            nflTeamFilter === 114 && (
              <>
                {steelersPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* AFC SOUTH TEAMS */}
          {/* Colts */}
          {nflFilter &&
            nflConferenceFilter === 1 &&
            nflDivisionFilter === 2 &&
            nflTeamFilter === 121 && (
              <>
                {coltsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Jaguars */}
          {nflFilter &&
            nflConferenceFilter === 1 &&
            nflDivisionFilter === 2 &&
            nflTeamFilter === 122 && (
              <>
                {jaguarsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Texans */}
          {nflFilter &&
            nflConferenceFilter === 1 &&
            nflDivisionFilter === 2 &&
            nflTeamFilter === 123 && (
              <>
                {texansPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Titans */}
          {nflFilter &&
            nflConferenceFilter === 1 &&
            nflDivisionFilter === 2 &&
            nflTeamFilter === 124 && (
              <>
                {titansPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* AFC EAST TEAMS */}
          {/* Bills */}
          {nflFilter &&
            nflConferenceFilter === 1 &&
            nflDivisionFilter === 3 &&
            nflTeamFilter === 131 && (
              <>
                {billsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Dolphins */}
          {nflFilter &&
            nflConferenceFilter === 1 &&
            nflDivisionFilter === 3 &&
            nflTeamFilter === 132 && (
              <>
                {dolphinsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Jets */}
          {nflFilter &&
            nflConferenceFilter === 1 &&
            nflDivisionFilter === 3 &&
            nflTeamFilter === 133 && (
              <>
                {jetsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Patriots */}
          {nflFilter &&
            nflConferenceFilter === 1 &&
            nflDivisionFilter === 3 &&
            nflTeamFilter === 134 && (
              <>
                {patriotsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* AFC WEST TEAMS */}
          {/* Broncos */}
          {nflFilter &&
            nflConferenceFilter === 1 &&
            nflDivisionFilter === 4 &&
            nflTeamFilter === 141 && (
              <>
                {broncsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Chargers */}
          {nflFilter &&
            nflConferenceFilter === 1 &&
            nflDivisionFilter === 4 &&
            nflTeamFilter === 142 && (
              <>
                {chargersPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Chiefs */}
          {nflFilter &&
            nflConferenceFilter === 1 &&
            nflDivisionFilter === 4 &&
            nflTeamFilter === 143 && (
              <>
                {chiefsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Raiders */}
          {nflFilter &&
            nflConferenceFilter === 1 &&
            nflDivisionFilter === 4 &&
            nflTeamFilter === 144 && (
              <>
                {raidersPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* NFC NORTH TEAMS */}
          {/* Bears */}
          {nflFilter &&
            nflConferenceFilter === 2 &&
            nflDivisionFilter === 1 &&
            nflTeamFilter === 211 && (
              <>
                {bearsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Lions */}
          {nflFilter &&
            nflConferenceFilter === 2 &&
            nflDivisionFilter === 1 &&
            nflTeamFilter === 212 && (
              <>
                {lionsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Packers */}
          {nflFilter &&
            nflConferenceFilter === 2 &&
            nflDivisionFilter === 1 &&
            nflTeamFilter === 213 && (
              <>
                {packersPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Vikings */}
          {nflFilter &&
            nflConferenceFilter === 2 &&
            nflDivisionFilter === 1 &&
            nflTeamFilter === 214 && (
              <>
                {vikingsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* NFC SOUTH TEAMS */}
          {/* Buccaneers */}
          {nflFilter &&
            nflConferenceFilter === 2 &&
            nflDivisionFilter === 2 &&
            nflTeamFilter === 221 && (
              <>
                {buccaneerssPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Falcons */}
          {nflFilter &&
            nflConferenceFilter === 2 &&
            nflDivisionFilter === 2 &&
            nflTeamFilter === 222 && (
              <>
                {falconsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Panthers */}
          {nflFilter &&
            nflConferenceFilter === 2 &&
            nflDivisionFilter === 2 &&
            nflTeamFilter === 223 && (
              <>
                {panthersPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Saints */}
          {nflFilter &&
            nflConferenceFilter === 2 &&
            nflDivisionFilter === 2 &&
            nflTeamFilter === 224 && (
              <>
                {saintsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* NFC EAST TEAMS */}
          {/* Cowboys */}
          {nflFilter &&
            nflConferenceFilter === 2 &&
            nflDivisionFilter === 3 &&
            nflTeamFilter === 231 && (
              <>
                {cowboysPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Eagles */}
          {nflFilter &&
            nflConferenceFilter === 2 &&
            nflDivisionFilter === 3 &&
            nflTeamFilter === 232 && (
              <>
                {eaglesPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Football Team */}
          {nflFilter &&
            nflConferenceFilter === 2 &&
            nflDivisionFilter === 3 &&
            nflTeamFilter === 233 && (
              <>
                {footballTeamPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Giants */}
          {nflFilter &&
            nflConferenceFilter === 2 &&
            nflDivisionFilter === 3 &&
            nflTeamFilter === 234 && (
              <>
                {giantsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* NFC WEST TEAMS */}
          {/* Niners */}
          {nflFilter &&
            nflConferenceFilter === 2 &&
            nflDivisionFilter === 4 &&
            nflTeamFilter === 241 && (
              <>
                {ninersPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Cardinals */}
          {nflFilter &&
            nflConferenceFilter === 2 &&
            nflDivisionFilter === 4 &&
            nflTeamFilter === 242 && (
              <>
                {cardinalsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Rams */}
          {nflFilter &&
            nflConferenceFilter === 2 &&
            nflDivisionFilter === 4 &&
            nflTeamFilter === 243 && (
              <>
                {ramsPostsList.map((post, key) => (
                  <PostCard post={post} key={key} />
                ))}
              </>
            )}
          {/* Seahawks */}
          {nflFilter &&
            nflConferenceFilter === 2 &&
            nflDivisionFilter === 4 &&
            nflTeamFilter === 244 && (
              <>
                {seahawksPostsList.map((post, key) => (
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
