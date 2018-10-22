
import React from 'react'
import Layout from '../components/Layout'
import Box from '../components/Box'
import Text from '../components/Text'
import { graphql } from 'gatsby'
import { Flex } from '../components/Flex'

const index = ({ data: { allContentfulMenuItem: { edges } }, location }) => {
  let menuItems = edges.map(i => {
    let { menuItem, menuType, menuItemDescription, menuPrice } = i.node
    return { menuItem, menuType, menuItemDescription, menuPrice }
  })
  return (
    <Layout location={location}>
      <Box height='100vh' bg='gold' px={3} py={4}>
        <Flex justifyContent='center'>
          <Box>
            {menuItems.map(i => {
              return (
                <Box width={300} key={i.menuItem}>
                  <Flex flexWrap='wrap'>
                    <Box width={0.8}>
                      <Text pt={3} fontSize={2} fontWeight='bold'>
                        {i.menuItem}
                      </Text>
                      <Text pt={1} pb={2}>{i.menuItemDescription}</Text>
                    </Box>
                    <Box width={0.1}>
                      <Flex justifyContent='flex-end'>
                        <Text lineHeight='1.7' pt={3}>{i.menuPrice}</Text>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
              )
            })}
          </Box>
        </Flex>
      </Box>
    </Layout>
  )
}

export default index

export const query = graphql`
   {
    allContentfulMenuItem(filter: { menuType: { eq: "main" } })  {
      edges {
        node {
          menuItem 
          menuType
          menuItemDescription
          menuPrice
        }
      }
    }
  }
`
