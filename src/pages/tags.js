import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import PageLayout from "../components/base/PageLayout";
import HeaderLayout from "../components/base/HeaderLayout";
import MainLayout from "../components/main/MainLayout";
import HeaderContainer from "../containers/base/HeaderContainer";
import TagsContainer from "../containers/tag/TagsContainer";
import Nav from "../components/base/Nav";
import FooterLayout from "../components/base/FooterLayout";
import Footer from "../components/base/Footer";

// export default ({ data }) => {
//   console.log("!412", data);
//   return (
//     <PageLayout>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>{data.Title.siteMetadata.title}</title>
//       </Helmet>
//       <HeaderLayout header={<HeaderContainer />} nav={<Nav />} />
//       <MainLayout tags={<TagsContainer datas={data} />} />
//       <FooterLayout footer={<Footer />} />
//     </PageLayout>
//   );
// };

class tags extends Component {
  render() {
    const { data } = this.props;
    console.log("data :: ", data);
    console.log("@@#", ...this.props);
    return (
      <PageLayout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{data.Title.siteMetadata.title}</title>
        </Helmet>
        <HeaderLayout header={<HeaderContainer />} nav={<Nav />} />
        <MainLayout tags={<TagsContainer {...this.props} />} />
        <FooterLayout footer={<Footer />} />
      </PageLayout>
    );
  }
}

export default tags;

export const TagsQuery = graphql`
  query tags {
    Title: site {
      siteMetadata {
        title
      }
    }
    TagBySlug: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`;
