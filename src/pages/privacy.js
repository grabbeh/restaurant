import React from 'react'
import Layout from '../components/Layout'
import Box from '../components/Box'
import Text from '../components/Text'
import Flex from '../components/Flex'
import { graphql } from 'gatsby'

const privacy = props => {
  let policy = props.data.allContentfulPrivacyPolicy.edges[0].node
  return (
    <Box>
      <Layout>
        <Box p={3} mb={3}>
          <Flex justifyContent='center'>
            <Box width={[1, 0.7, 0.5]}>
              <Text
                pt={1}
                pb={2}
                dangerouslySetInnerHTML={{
                  __html: policy.text.childMarkdownRemark.html
                }}
              />
            </Box>
          </Flex>
        </Box>
      </Layout>
    </Box>
  )
}

export default privacy

export const query = graphql`
  {
    allContentfulPrivacyPolicy {
      edges {
        node {
          text {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
