import React from "react";
import "./Article.scss";

const Article = ({ PostBySlug }) => {
  console.log("ARARAR", PostBySlug);
  return (
    <div className="Article">
      <div className="article-container">
        <div className="ArticleTitle">
          <h1>{PostBySlug.frontmatter.title}</h1>
        </div>
        <div className="ArticleDate">
          <h4>{PostBySlug.frontmatter.date}</h4>
        </div>
        <div className="ArticleTag">
          {PostBySlug.frontmatter.tags.map((tag, i) => {
            return <span>{tag}</span>;
          })}
        </div>
        <hr />
        <div className="ArticleContent">
          <div
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: PostBySlug.html }}
          />
        </div>
      </div>
    </div>
  );
};

export default Article;
