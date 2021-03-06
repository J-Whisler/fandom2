import React from "react";
import "./PostCard.scss";
import { useHistory } from "react-router-dom";

const PostCard = ({ post }) => {
  const getTeamName = post.team.toLowerCase().replace(/ /g, "");
  const getLeague = post.league.toLowerCase();
  const firstInitial = post.username.substring(0, 1);

  const sqlPostDate = post.createdAt;
  const sqlPostDateSplit = sqlPostDate.split(/[- :]/);
  const getPostMonth = sqlPostDateSplit[1];
  const getPostDay = sqlPostDateSplit[2].substring(0, 2);
  const getPostYear = sqlPostDateSplit[0].substring(2, 4);
  const formattedDate = `${getPostMonth}/${getPostDay}/${getPostYear}`;

  let history = useHistory();

  return (
    <div
      className={`postCard ${getLeague}-${getTeamName}`}
      onClick={() => {
        history.push(`/singlepost/${post.id}`);
      }}
    >
      <div className={`postCard__user ${getLeague}-${getTeamName}`}>
        <div className="postCard__userInitial">
          <p>{firstInitial}</p>
        </div>
        <div className="postCard__userInfo">
          <h6>{post.username}</h6>
          <span className="team">Team: </span>
          <span>{post.team}</span>
        </div>
      </div>
      <div className="postCard__title">
        <h5>{post.title}</h5>
      </div>
      <div className="postCard__text">
        <p>{post.postText}</p>
        <span>{formattedDate}</span>
      </div>
    </div>
  );
};

export default PostCard;
