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
  let recurring = edges.filter(e => {
    return !e.node.date
  })
  let oneOffFutureEvents = edges.filter(e => {
    let yesterday = dayjs().subtract(1, 'day')
    let eventDate = dayjs(e.node.date, 'MMMM Do, YYYY, h:mm a')
    return dayjs(eventDate).isAfter(yesterday)
  })

  // let events = [...recurring, ...oneOffFutureEvents]
  return (
    <Box>
      <Layout>
        <Box>
          <Flex justifyContent='center'>
            <Box p={3} width={[1, 0.7, 0.5]} zIndex={1}>
              <Box mb={2}>
                <Text fontSize={4} fontWeight='bold' textAlign='center'>
                  WHAT'S ON
                </Text>
              </Box>
              <Box>
                <Text textAlign='center' fontWeight='bold'>
                  All the time
                </Text>
                {recurring.length > 0 ? (
                  recurring.map(({ node }) => (
                    <Event key={node.id} event={node} />
                  ))
                ) : (
                  <Text textAlign='center'>Check back later for news</Text>
                )}
              </Box>
              <Box mt={4}>
                <Text textAlign='center' fontWeight='bold'>
                  Events
                </Text>
                <Box mr={4}>
                  {oneOffFutureEvents.length > 0 ? (
                    oneOffFutureEvents.map(({ node }) => (
                      <Event key={node.id} event={node} />
                    ))
                  ) : (
                    <Box mt={3}>
                      <Text textAlign='center'>Check back later for news</Text>
                    </Box>
                  )}
                </Box>
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
  query {
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
