const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    const value = node.frontmatter.path;
    createNodeField({
      name: "slug",
      node,
      value: slug
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `).then(result => {
      const tags = result.data.allMarkdownRemark.edges;
      let tagsAll = [];
      tags.map((data, i) => {
        data.node.frontmatter.tags.map((tag, j) => {
          tagsAll.push(tag);
        });
      });
      tagsAll.forEach((data, i) => {
        createPage({
          path: `/search/${data}`,
          component: path.resolve(`./src/templates/search-template.js`),
          context: {
            sId: data
          }
        });
      });
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/post-template.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug
          }
        });
      });
      resolve();
    });
  });
};

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*";

    // Update the page.
    createPage(page);
  }
};
