import React from 'react'
import Layout from '../components/Layout'
import Box from '../components/Box'
import Flex from '../components/Flex'
import Button from '../components/Button'
import Text from '../components/Text'
import { Link, graphql, useStaticQuery } from 'gatsby'

const basePages = ["Find us", "Info", "Gallery", "Events", "Menus"]
const createLink = (str) => {
  return str.replace(/\s+/g, '-').toLowerCase()
}

const query = graphql`
    query {
      navItems: allContentfulTemplatePage {
        edges {
          node {
            title
          }
        }
      }
    }
  `

const Navigation = () => {
  const data = useStaticQuery(query)
  let navItems = basePages.map(page => ({ name: page, link: createLink(page)}))
  navItems = [...navItems, { name:'Home', link: '/' }]
  return (
    <Layout bg='go-light-peach'>
      <Box py={4}>
        {navItems.map(({ name, link }) => (
          <Flex key={name} justifyContent='center'>
            <Box pb={4}>
              <Link to={link}>
                <Button bg='go-light-peach'>
                  <Text color='petrol'>{name.toUpperCase()}</Text>
                </Button>
              </Link>
            </Box>
          </Flex>
        ))}
      </Box>
    </Layout>
  )
}

export default Navigation
