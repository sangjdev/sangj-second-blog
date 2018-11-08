import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import PageLayout from "../components/base/PageLayout";
import HeaderContainer from "../containers/base/HeaderContainer";
import SidebarContainer from "../containers/base/SidebarContainer";
import Nav from "../components/base/Nav";
import ParallaxView from "../components/view/ParallaxView";
import MainLayout from "../components/main/MainLayout";
import HeaderLayout from "../components/base/HeaderLayout";
import MainTitle from "../components/main/MainTitle";
import PostContainer from "../containers/post/PostContainer";
import UtilityContainer from "../containers/utility/UtilityContainer";
import FooterLayout from "../components/base/FooterLayout";
import Footer from "../components/base/Footer";
import "../assets/scss/init.scss";

class index extends Component {
  render() {
    const { data } = this.props;
    return (
      <PageLayout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{data.Title.siteMetadata.title}</title>
        </Helmet>
        <HeaderLayout header={<HeaderContainer />} nav={<Nav />} />
        {/* <ParallaxView /> */}
        {/* <MainTitle /> */}
        <MainLayout post={<PostContainer {...this.props} />} />
        <FooterLayout footer={<Footer />} />
      </PageLayout>
    );
  }
}

export default index;

export const IndexQuery = graphql`
  query index {
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
