import React from "react";
import _ from "lodash";
import Tags from "../../components/tag/Tags";
const TagsContainer = ({ data }) => {
  const tags = data.TagBySlug.edges;
  let tagsAll = [];
  let countedTag = [];
  let result = [];
  tags.map((data, i) => {
    data.node.frontmatter.tags.map((tag, j) => {
      tagsAll.push(tag);
    });
  });
  countedTag = _.countBy(tagsAll);
  result = _.union(tagsAll);
  // countBy, union의 활용
  return (
    <div>
      {result.map((content, i) => {
        return <Tags name={content} tag={countedTag[content]} key={i} />;
      })}
    </div>
  );
};

export default TagsContainer;
