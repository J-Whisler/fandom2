import React, { useEffect, useState } from "react";
import "./SinglePost.scss";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import CommentCard from "../../components/CommentCard/CommentCard";
import PostCard from "../../components/PostCard/PostCard";

const SinglePost = () => {
  const [selectedPost, setSelectedPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  let { id } = useParams();
  console.log(comments);

  useEffect(() => {
    axios.get(`http://localhost:2323/posts/byId/${id}`).then((response) => {
      setSelectedPost([response.data]);
    });

    axios.get(`http://localhost:2323/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  }, [id]);

  const addComment = () => {
    axios
      .post("http://localhost:2323/comments", {
        commentBody: newComment,
        PostId: id,
      })
      .then((response) => {
        const commentToAdd = { commentBody: newComment };
        setComments([...comments, commentToAdd]);
        setNewComment("");
      });
  };

  return (
    <div className="singlePost">
      <Link to="/all" className="singlePost__link">
        <div className="singlePost__backArrow">
          <i className="fas fa-arrow-left"></i>
        </div>
        <span>All Posts</span>
      </Link>
      <div className="singlePost__post">
        {selectedPost.map((post, key) => {
          return <PostCard post={post} key={key} />;
        })}
      </div>
      <div className="singlePost__comments">
        <div className="singlePost__addComment">
          <textarea
            onChange={(e) => {
              setNewComment(e.target.value);
            }}
            type="text"
            placeholder="Comment..."
            value={newComment}
          />
          <button onClick={addComment}>Add Comment</button>
        </div>
        <div className="singlePost__listOfComments">
          <h3>Comments</h3>
          <div className="singlePost__comments">
            {comments.map((comment, key) => {
              return <CommentCard comment={comment} key={key} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
