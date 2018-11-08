import React from "react";
import "./Tags.scss";

const Tags = ({ name, tag }) => {
  return (
    <div className="Tags">
      <div className="tag-container">
        <a href={`/search/${name}`}>
          <span>{name}</span>
          <span>{tag}</span>
        </a>
      </div>
    </div>
  );
};

export default Tags;
