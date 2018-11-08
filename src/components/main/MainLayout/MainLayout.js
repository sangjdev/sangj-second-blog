import React from "react";
import "./MainLayout.scss";

const MainLayout = ({ post, tags }) => {
  return (
    <div className="MainLayout">
      <div className="main-container">
        {post && <div className="ListContainer">{post}</div>}
        {tags && <div className="ListContainer">{tags}</div>}
      </div>
    </div>
  );
};

export default MainLayout;
