import React from 'react'
import Layout from '../components/Layout'
import Box from '../components/Box'
import Flex from '../components/Flex'
import Button from '../components/Button'
import Text from '../components/Text'
import { Link, graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  query {
    navItems: allContentfulNavigationItem {
      edges {
        node {
          name
          link
        }
      }
    }
  }
`

const Navigation = () => {
  const data = useStaticQuery(query)
  console.log(data)
  return (
    <Layout bg='go-light-peach'>
      <Box py={4}>
        {data.navItems.edges.map(({ node: { name, link } }) => {
          console.log(name)
          return (
            <Flex key={name} justifyContent='center'>
              <Box pb={4}>
                <Link to={link}>
                  <Button bg='go-light-peach'>
                    <Text color='petrol'>{name.toUpperCase()}</Text>
                  </Button>
                </Link>
              </Box>
            </Flex>
          )
        })}
      </Box>
    </Layout>
  )
}

export default Navigation
