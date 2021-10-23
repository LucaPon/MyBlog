import React, { useContext, useState } from "react";
import { UserContext } from "../../../shared/UserContext";
import Button from "../../Button/Button";
import "./AddPost.css";
import { createPost } from "../../../shared/Service";

const AddPost = ({ addPost, toggleAdd }) => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const [titleError, setTitleError] = useState(false);
  const [textError, setTextError] = useState(false);

  const resetForm = () => {
    setTitle("");
    setText("");
    setTitleError(false);
    setTextError(false);
  };

  const isValidForm = () => {
    var valid = true;

    if (title === "") {
      setTitleError(true);
      valid = false;
    }
    if (text === "") {
      setTextError(true);
      valid = false;
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidForm()) {
      createPost({
        title: title,
        body: text,
        userId: loggedUser.id,
      })
        .then((post) => {
          addPost(post);
          resetForm();
          toggleAdd();
        })
        .catch((error) => {
          console.log(error.message);
          setTitleError(true);
          setTextError(true);
          resetForm();
        });
    }
  };

  return (
    <div className="add-post">
      <form onSubmit={handleSubmit}>
        <label>Titolo:</label>
        <input
          className={`${titleError && "invalid-input"}`}
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />

        <label>Testo:</label>
        <textarea
          className={`post-text ${textError && "invalid-input"}`}
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
        <Button text="Crea Post" />
      </form>
    </div>
  );
};

export default AddPost;
