import React from 'react';
import Helmet from 'react-helmet';
import '../assets/scss/init.scss';

const layout = ({ data, children }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
      {children}
    </div>
  );
};

export default layout;
