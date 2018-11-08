import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import PageLayout from "../components/base/PageLayout";
import HeaderLayout from "../components/base/HeaderLayout";
import MainLayout from "../components/main/MainLayout";
import HeaderContainer from "../containers/base/HeaderContainer";
import ArticleContainer from "../containers/article/ArticleContainer";
import Nav from "../components/base/Nav";
import FooterLayout from "../components/base/FooterLayout";
import Footer from "../components/base/Footer";

class PostTemplate extends Component {
  render() {
    const { data } = this.props;
    console.log("data", data);
    return (
      <PageLayout>
        <Helmet>
          <meta charSet="utf-8" />
          {/* <title>{data.site.siteMetadata.title}</title> */}
        </Helmet>
        <HeaderLayout header={<HeaderContainer />} nav={<Nav />} />
        <MainLayout tags={<ArticleContainer {...this.props} />} />
        <FooterLayout footer={<Footer />} />
      </PageLayout>
    );
  }
}

export default PostTemplate;

export const postquery = graphql`
  query helloPost($slug: String!) {
    Title: site {
      siteMetadata {
        title
      }
    }
    PostBySlug: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        tags
      }
      html
      id
    }
  }
`;
