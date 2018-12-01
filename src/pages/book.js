import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { Flex } from '../components/Flex'
import Box from '../components/Box'
import Text from '../components/Text'

const book = props => {
  return (
    <Box>
      <Layout>
        <Header />
        <Box p={3} my={3}>
          <Flex justifyContent='center'>
            <Box width={[1, 0.7, 0.5]}>
              <Text fontSize={3} textAlign='center'>
                Call us on <a href='tel:02083407677'>02083407677</a> or email{' '}
                <a href='mailto:admin@goodsoffice.co.uk'>us</a> to book
              </Text>
            </Box>
          </Flex>
        </Box>
      </Layout>
    </Box>
  )
}

export default book
