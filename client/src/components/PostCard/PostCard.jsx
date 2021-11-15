import React from "react";
import "./PostCard.scss";

const PostCard = ({ post }) => {
  return (
    <div className="postCard">
      <div className="postCard__user">
        <h6>{post.username}</h6>
      </div>
      <div className="postCard__title">
        <h5>{post.title}</h5>
      </div>
      <div className="postCard__text">
        <p>{post.postText}</p>
      </div>
    </div>
  );
};

export default PostCard;
