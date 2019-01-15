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
                { name: 'description', content: 'Friendly neighbourhood cafe/restaurant in Stroud Green' },
                { name: 'keywords', content: "Crouch End, Stroud Green, Cafe, Restaurant" }
              ]}
            >
              <html lang='en' />
              <script src='https://cdn.polyfill.io/v2/polyfill.min.js' />
            </Helmet>
            <Box
              bg={props.bg}
              color={props.color}
              fontFamily={props.fontFamily}
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
