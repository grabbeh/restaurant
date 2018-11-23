import React from 'react'
import Layout from '../components/Layout'
import Box from '../components/Box'
import Text from '../components/Text'
import { Flex } from '../components/Flex'

const evening = props => {
  const edges = props.data.allContentfulMenuItem.edges
  const title = edges[0].node.type
  return (
    <Layout {...props}>
      <Box height='100vh' bg='gold' px={3} py={4}>
        <Flex justifyContent='center'>
          <Box>
            <Box py={3}>
              <Text fontSize={3} fontWeight='bold'>{title}</Text>
              {edges.map(({ node: { name, price, description } }) => {
                return (
                  <Box width={300} key={name}>
                    <Flex flexWrap='wrap'>
                      <Box width={0.8}>
                        <Text pt={3} fontSize={2} fontWeight='bold'>
                          {name}
                        </Text>
                        <Text pt={1} pb={2}>{description}</Text>
                      </Box>
                      <Box width={0.1}>
                        <Flex justifyContent='flex-end'>
                          <Text lineHeight='1.7' pt={3}>{`£${price}`}</Text>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                )
              })}
            </Box>
          </Box>
        </Flex>
      </Box>
    </Layout>
  )
}

export default evening
