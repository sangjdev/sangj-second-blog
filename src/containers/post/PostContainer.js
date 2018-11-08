import React, { Fragment } from "react";
import Post from "../../components/post/Post";
import PostTitle from "../../components/post/PostTitle";

const PostContainer = ({ data, pageContext }) => {
  return (
    <Fragment>
      <PostTitle name={pageContext.sId ? pageContext.sId : null} />
      {data.PostData.edges.map((content, i) => {
        if (pageContext.sId) {
          if (content.node.frontmatter.tags.includes(pageContext.sId)) {
            return <Post data={content} key={i} />;
          }
          return;
        }
        return <Post data={content} key={i} />;
      })}
    </Fragment>
  );
};

export default PostContainer;
