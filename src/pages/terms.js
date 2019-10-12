import React from 'react'
import Layout from '../components/Layout'
import Box from '../components/Box'
import Text from '../components/Text'
import Flex from '../components/Flex'
import { graphql } from 'gatsby'

const terms = props => {
  let terms = props.data.allContentfulTermsOfUse.edges[0].node
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
                  __html: terms.text.childMarkdownRemark.html
                }}
              />
            </Box>
          </Flex>
        </Box>
      </Layout>
    </Box>
  )
}

export default terms

export const query = graphql`
  query {
    allContentfulTermsOfUse {
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
