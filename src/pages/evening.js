import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Box from '../components/Box'
import { Flex } from '../components/Flex'
import Text from '../components/Text'
import Header from '../components/Header'

const evening = props => {
  const edges = props.data.allContentfulMenuItem.edges
  const title = edges[0].node.type
  return (
    <Layout>
      <Header />
      <Box>
        <Box>
          <Flex justifyContent='center'>
            <Box width={[1, 450]} zIndex={1}>
              <Box mx={3} my={4}>
                <Text fontSize={3} fontWeight='bold'>{title}</Text>
                {edges.map(({ node: { name, price, description } }) => {
                  return (
                    <Box key={name}>
                      <Flex flexWrap='wrap'>
                        <Box width={0.8}>
                          <Text pt={3} fontSize={2} fontWeight='bold'>
                            {name}
                          </Text>
                          {description &&
                            <Text
                              pt={1}
                              pb={2}
                              dangerouslySetInnerHTML={{
                                __html: description.childMarkdownRemark.html
                              }}
                            />}
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
        <Box
          bg='go-light-peach'
          height={350}
          mt={-100}
          width='100%'
          transform={2}
        />
      </Box>
    </Layout>
  )
}

export default evening

export const query = graphql`
   {
      allContentfulMenuItem(filter: { type: { eq: "Dinner" } })  {
        edges {
          node {
            name
            price
            description {
              childMarkdownRemark {
                html
              }
            }
            type
          }
        }
      }
    }
  
`
