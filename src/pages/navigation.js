import React from 'react'
import Layout from '../components/Layout'
import Box from '../components/Box'
import Flex from '../components/Flex'
import Button from '../components/Button'
import Text from '../components/Text'
import { Link, graphql, StaticQuery } from 'gatsby'

const menu = () => {
  return (
    <StaticQuery
      query={graphql`
        query menuTypeQuery {
          site {
            siteMetadata {
              navMenuTypes {
                link
                title
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Layout bg='go-light-peach'>
            <Box py={4}>
              {data.site.siteMetadata.navMenuTypes.map(({ link, title }) => {
                return (
                  <Flex key={title} justifyContent='center'>
                    <Box key={title} pb={4}>
                      <Link to={link}>
                        <Button bg='go-light-peach'>
                          <Text color='petrol'>{title}</Text>
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
