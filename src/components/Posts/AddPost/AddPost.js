import React from "react";
import Button from "../../Button/Button";
import "./AddPost.css";

const AddPost = () => {
  return (
    <div className="add-post">
      <form>
        <label>Titolo:</label>
        <input type="text" required />

        <label>Testo:</label>
        <textarea className="post-text" required></textarea>

        <Button text="Crea Post" />
      </form>
    </div>
  );
};

export default AddPost;
