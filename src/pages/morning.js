import React from 'react'
import Box from '../components/Box'
import Button from '../components/Button'
import { Flex } from '../components/Flex'

const morning = props => {
  return (
    <Box height='100vh' px={3} py={4}>
      <Flex justifyContent='center'>
        <Box mb={4}>
          <Button>BREAKFAST</Button>
        </Box>
      </Flex>
      <Flex justifyContent='center'>
        <Box mb={4}>
          <Button>BRUNCH</Button>
        </Box>
      </Flex>
      <Flex justifyContent='center'>
        <Box mb={4}>
          <Button>LUNCH</Button>
        </Box>
      </Flex>
      <Flex justifyContent='center'>
        <Box mb={4}>
          <Button>DINNER</Button>
        </Box>
      </Flex>

    </Box>
  )
}

export default morning
