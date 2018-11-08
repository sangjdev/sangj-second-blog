import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import PageLayout from "../components/base/PageLayout";
import HeaderContainer from "../containers/base/HeaderContainer";
import Nav from "../components/base/Nav";
import MainLayout from "../components/main/MainLayout";
import HeaderLayout from "../components/base/HeaderLayout";
import PostContainer from "../containers/post/PostContainer";
import FooterLayout from "../components/base/FooterLayout";
import Footer from "../components/base/Footer";
import "../assets/scss/init.scss";

class SearchTemplate extends Component {
  render() {
    const { data } = this.props;
    return (
      <PageLayout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{data.Title.siteMetadata.title}</title>
        </Helmet>
        <HeaderLayout header={<HeaderContainer />} nav={<Nav />} />
        <MainLayout post={<PostContainer {...this.props} />} />
        <FooterLayout footer={<Footer />} />
      </PageLayout>
    );
  }
}
export default SearchTemplate;
export const SearchQuery = graphql`
  query search {
    Title: site {
      siteMetadata {
        title
      }
    }
    PostData: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            tags
            path
            description
          }
        }
      }
    }
  }
`;
