import React from 'react'
import Box from '../components/Box'
import { graphql } from 'gatsby'
import Button from '../components/Button'
import { Flex } from '../components/Flex'

const afternoon = props => {
  return (
    <Box height='100vh' px={3} py={4}>
      <Flex justifyContent='center'>
        <Box>
          <Button>Brunch</Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default afternoon

export const query = graphql`
   {
    allContentfulMenuItem(filter: { type: { eq: "Dinner" } })  {
      edges {
        node {
          name
          price
          type
        }
      }
    }
  }
`
