import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import AddPost from "./AddPost/AddPost";
import Post from "./Post/Post";
import "./Posts.css";
import { BlogContext } from "../../shared/BlogContext";

const Posts = ({ showAdd, filterUser, addPost }) => {
  const [addVisible, setAddVisible] = useState(false);
  const [users, posts] = useContext(BlogContext);

  const getPosts = () => {
    if (filterUser === -1) return posts;
    return posts.filter((post) => post.userId === filterUser);
  };

  const getUser = (post) => {
    return users.filter((user) => user.id === post.userId)[0];
  };

  const toggleAdd = () => {
    setAddVisible((addVisible) => !addVisible);
  };

  return (
    <div>
      <div className="posts-head">
        <h2>Posts</h2>
        {showAdd && (
          <Button
            onClick={toggleAdd}
            text={addVisible ? "Cancel" : "Add New"}
            color={addVisible ? "#0E566C" : "#DE7443"}
          />
        )}
      </div>

      {addVisible && <AddPost addPost={addPost} toggleAdd={toggleAdd} />}

      {getPosts().map((post, index) => (
        <Post key={index} post={post} user={getUser(post)} />
      ))}
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array,
  users: PropTypes.array,
  showAdd: PropTypes.bool,
  filterUser: PropTypes.number,
};

Posts.defaultProps = {
  filterUser: -1,
  showAdd: false,
};

export default Posts;
