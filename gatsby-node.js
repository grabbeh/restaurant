const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allContentfulTemplatePage {
          edges {
            node {
              title
            }
          }
        }
      }
    `
  )

  result.data.allContentfulTemplatePage.edges.forEach(({ node: { title } }) => {
    createPage({
      path: title.replace(/\s+/g, '-').toLowerCase(),
      component: path.resolve(`src/templates/page.js`),
      context: {
        title
      }
    })
  })
}
