module.exports = {
  // styles: resolveApp("src/assets/scss"),
  siteMetadata: {
    title: `Sangj Blog`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["src/assets/scss"]
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/pages`
      }
    }
  ]
};
