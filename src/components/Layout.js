import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Header from './Header'
import uniq from 'lodash/uniq'
import '../index.css'

const Layout = props => {
  return (
    <StaticQuery
      query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        allContentfulMenuItem {
          edges {
            node {
              type
            }
          }
        }
      }
    `}
      render={data => {
        let activePath = null
        if (props.location) {
          activePath = props.location.pathname
        }
        let types = uniq(
          data.allContentfulMenuItem.edges.map(({ node: { type } }) => {
            return type
          })
        )
        return (
          <Fragment>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' }
              ]}
            >
              <html lang='en' />
            </Helmet>
            <Header types={types} activePath={activePath} />
            <div>
              {props.children}
            </div>
          </Fragment>
        )
      }}
    />
  )
}

export default Layout
