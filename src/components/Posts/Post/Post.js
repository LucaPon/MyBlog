import React from "react";
import "./Post.css";
const Post = () => {
  return (
    <div className="post">
      <h3>Post Title</h3>
      <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed nulla
        sodales tellus faucibus dictum. Cras accumsan ante dui, vitae mollis ex
        faucibus at. Maecenas aliquam facilisis massa, et gravida orci consequat
        vel. Suspendisse ut ipsum libero. Vivamus tincidunt venenatis magna ac
        scelerisque.
      </p>
      <p className="author">test@email.com</p>
    </div>
  );
};

export default Post;
