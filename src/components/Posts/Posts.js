import React from "react";
import Button from "../Button/Button";
import AddPost from "./AddPost/AddPost";
import Post from "./Post/Post";
import "./Posts.css";

const Posts = () => {
  return (
    <div>
      <div className="posts-head">
        <h2>Posts</h2>
        <Button text="Add New" />
      </div>

      <AddPost />

      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
