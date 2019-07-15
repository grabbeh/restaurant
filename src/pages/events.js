import React from 'react'
import Layout from '../components/Layout'
import Box from '../components/Box'
import Text from '../components/Text'
import Flex from '../components/Flex'
import Event from '../components/Event'
import { graphql } from 'gatsby'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)

const events = ({
  data: {
    allContentfulEvent: { edges }
  }
}) => {
  /*
  console.log(edges)
  let events = edges.filter(e => {
    let yesterday = dayjs().subtract(1, 'day')
    let eventDate = dayjs(e.node.date, 'MMMM Do, YYYY, h:mm a')
    return dayjs(eventDate).isAfter(yesterday)
  })*/
  return (
    <Box>
      <Layout>
        <Box>
          <Flex justifyContent='center'>
            <Box p={3} width={[1, 0.7, 0.5]} zIndex={1}>
              <Box mb={2}>
                <Text fontSize={3} fontWeight='bold' textAlign='center'>
                  WHAT'S ON
                </Text>
              </Box>
              <Box position='relative'>
                {edges.length > 0 ? edges.map(({ node }) => (
                  <Event key={node.id} event={node} />
                )) : <Text textAlign='center'>Check back later for events news</Text> }
              </Box>
            </Box>
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
          eventImage {
            fluid(maxWidth: 1200) {
              ...GatsbyContentfulFluid
            }
            description
          }
          frequency
          id
        }
      }
    }
  }
`
