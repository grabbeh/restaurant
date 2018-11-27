import React from 'react'
import Layout from '../components/Layout'
import Box from '../components/Box'
import { Flex } from '../components/Flex'
import Header from '../components/Header'
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
          <Layout bg='white'>
            <Header />
            <Box py={4}>
              {data.site.siteMetadata.menuTypes.map(({ link, title }) => {
                return (
                  <Flex justifyContent='center'>
                    <Box width={200} height={100} key={title} pb={4}>
                      <Link to={link}>
                        <Button bg='go-light-peach' width={1}>
                          <Text fontSize={3} fontWeight='bold' color='petrol'>
                            {title}
                          </Text>
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
