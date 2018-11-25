import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import '../index.css'
import Footer from '../components/Footer'
import Box from '../components/Box'

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
      }
    `}
      render={data => {
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

            <Box
              bg={`${props.bg}`}
              style={{
                backgroundColor: `${props.bg}`,
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh'
              }}
            >
              {props.children}

            </Box>
            <Footer />

          </Fragment>
        )
      }}
    />
  )
}

export default Layout
