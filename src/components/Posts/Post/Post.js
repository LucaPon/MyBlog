import React from "react";
import "./Post.css";
const Post = ({ post, user }) => {
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p className="text">{post.body}</p>
      <p className="author">{user.email}</p>
    </div>
  );
};

export default Post;
