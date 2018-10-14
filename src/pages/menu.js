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
      <Box height='100vh' bg='gold' px={3} pt={4}>
        <Flex flex='flex-wrap' justifyContent='center'>
          <Box>
            {menuItems.map(i => {
              return (
                <Box key={i.menuItem}>
                  <Flex justifyContent='flex-start'>
                    <Box width={2 / 3}>
                      <Text fontSize={2} fontWeight='bold'>{i.menuItem}</Text>
                      <Text pt={2}>{i.menuItemDescription}</Text>
                    </Box>
                  </Flex>
                  <Flex justifyContent='flex-end'>
                    <Box width={1 / 4}><Text>{i.menuPrice}</Text></Box>
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
    allContentfulMenuItem {
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
