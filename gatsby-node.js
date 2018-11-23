const path = require('path')
const uniq = require('lodash/uniq')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  // get type data so can create page per unique type
  return graphql(
    `{
      allContentfulMenuItem {
        edges {
          node {
            type
          }
        }
      }
    }
  `
  ).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    // get unique menu types
    let types = uniq(
      result.data.allContentfulMenuItem.edges.map(({ node: { type } }) => {
        return type
      })
    )
    // create page per unique menu type and pass type in context so template can query
    // for items on basis of template
    types.forEach(type => {
      createPage({
        path: type,
        component: path.resolve(`src/templates/menuTemplate.js`),
        context: {
          type
        }
      })
    })
  })
}
