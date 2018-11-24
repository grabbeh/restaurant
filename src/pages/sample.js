import React from 'react'
import Box from '../components/Box'
import Text from '../components/Text'
import { Flex } from '../components/Flex'

const sample = () => (
  <Box px={5}>
    <Flex justifyContent='center' flexWrap='wrap'>
      <Box width={100}>
        <Flex justifyContent='flex-start'>
          <Text pt={3} fontSize={2} fontWeight='bold'>
            Pizza
          </Text>
        </Flex>
      </Box>
      <Box width={0.6}>
        <Flex justifyContent='center'>
          <Text lineHeight='1.7' pt={3}>£10</Text>
        </Flex>
      </Box>
      <Box width={100}>
        <Flex justifyContent='flex-end'>
          <Text lineHeight='1.7' pt={3}>£10</Text>
        </Flex>
      </Box>
    </Flex>
  </Box>
)

export default sample
