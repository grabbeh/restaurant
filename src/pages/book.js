import React from 'react'
import Layout from '../components/Layout'
import Flex from '../components/Flex'
import Box from '../components/Box'
import Text from '../components/Text'

const book = props => {
  return (
    <Box>
      <Layout>
        <Flex justifyContent='center'>
          <Box maxWidth={1200} p={3} my={3}>
            <Flex justifyContent='center'>
              <Box width={[1, 0.7, 0.5]}>
                <Text fontSize={3} textAlign='center'>
                  Call us on <a href='tel:02083407677'>02083407677</a> or {` `}
                  <a href='mailto:admin@goodsoffice.co.uk'>email us</a> on
                  admin@goodsoffice.co.uk to book
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Layout>
    </Box>
  )
}

export default book
