import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Box from '../components/Box'
import Text from '../components/Text'
import { Flex } from '../components/Flex'
import Event from '../components/Event'
import { graphql } from 'gatsby'

const events = props => {
  let { edges } = props.data.allContentfulEvent
  return (
    <Box>
      <Layout>
        <Header />
        <Box>
          <Flex justifyContent='center'>
            <Box p={3} width={[1, 0.7, 0.5]} zIndex={1}>
              <Box mb={2}>
                <Text fontSize={3} caps fontWeight='bold' textAlign='center'>
                  What's on
                </Text>
              </Box>
              <Box position='relative'>
                {edges.map(({ node }) => (
                  <Event key={node.id} event={node} />
                ))}
              </Box>
            </Box>
            <Box
              bg='go-light-peach'
              height={400}
              mt={300}
              width='100%'
              transform={2}
              position='absolute'
            />
          </Flex>
        </Box>
      </Layout>
    </Box>
  )
}

export default events

export const query = graphql`
  {
    allContentfulEvent(sort: { fields: [date], order: ASC }) {
      edges {
        node {
          name
          date(formatString: "MMMM Do, YYYY, h:mm a")
          description {
            childMarkdownRemark {
              html
            }
          }
          recurring
          frequency
          eventImage {
            fluid(maxWidth: 1200) {
              ...GatsbyContentfulFluid
            }
            description
          }
          id
        }
      }
    }
  }
`
