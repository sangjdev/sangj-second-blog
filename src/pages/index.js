import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => {
  return <Layout data={data}>124124</Layout>;
};

export const LayoutQuery = graphql`
  query layoutTitle {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
