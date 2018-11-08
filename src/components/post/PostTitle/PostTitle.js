import React from "react";
import "./PostTitle.scss";

const PostTitle = ({ name }) => {
  console.log("name", name);
  return (
    <div className="PostTitle">
      <h1>{name ? name : "모든 포스트"}</h1>
    </div>
  );
};

export default PostTitle;
