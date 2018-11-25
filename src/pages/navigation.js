import React from 'react'
import Layout from '../components/Layout'
import Box from '../components/Box'
import { Flex } from '../components/Flex'
import Header from '../components/Header'
import Button from '../components/Button'
import { Link, graphql, StaticQuery } from 'gatsby'

const menu = () => {
  return (
    <StaticQuery
      query={graphql`
      query menuTypeQuery {
        site {
          siteMetadata {
            menuTypes {
              link
              title
            }
          }
        }
      }
    `}
      render={data => {
        return (
          <Layout>
            <Header />
            <Box my={4}>
              {data.site.siteMetadata.menuTypes.map(({ link, title }) => {
                return (
                  <Flex justifyContent='center'>
                    <Box key={title} mr={4} mb={4}>
                      <Link to={link}>
                        <Button width={[200]}>
                          {title}
                        </Button>
                      </Link>
                    </Box>
                  </Flex>
                )
              })}

            </Box>
          </Layout>
        )
      }}
    />
  )
}

export default menu
