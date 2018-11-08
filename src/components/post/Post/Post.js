import React from "react";
import "./Post.scss";

const Post = ({ data }) => {
  console.log("&&&&&&", data);
  return (
    <div className="Post">
      <div className="post-title">
        <a href={data.node.frontmatter.path}>
          <h3>{data.node.frontmatter.title}</h3>
        </a>
      </div>
      <div className="post-summary">
        {data.node.frontmatter.description}
        {/* 블로그를 만들면서 배우는 것들과, 앞으로의 진행방향. 블로그를 만들면서
        배우는 것들과, 앞으로의 진행방향. 블로그를 만들면서 배우는 것들과... */}
      </div>
      <div className="post-caption">{data.node.frontmatter.date}</div>
    </div>
  );
};

export default Post;
