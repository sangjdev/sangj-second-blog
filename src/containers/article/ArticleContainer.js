import React, { Component, Fragment } from "react";
import Article from "../../components/article/Article";

class ArticleContainer extends Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <Article {...data} />
      </Fragment>
    );
  }
}

export default ArticleContainer;
