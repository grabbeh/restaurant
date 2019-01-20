import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Footer from './Footer'
import Box from './Box'
import Header from './Header'
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
        }
      `}
      render={data => {
        return (
          <Fragment>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content:
                    'Friendly neighbourhood cafe/restaurant in Stroud Green'
                },
                {
                  name: 'keywords',
                  content: 'Crouch End, Stroud Green, Cafe, Restaurant'
                }
              ]}
            >
              <html lang='en' />
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
              <Header />
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
