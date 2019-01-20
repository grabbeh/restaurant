import React from 'react'
import Layout from '../components/Layout'
import Box from '../components/Box'
import Text from '../components/Text'
import Flex from '../components/Flex'
import { graphql } from 'gatsby'

const info = props => {
  let info = props.data.allContentfulInfoPage.edges[0].node
  return (
    <Box>
      <Layout>
        <Box p={3} my={3}>
          <Flex justifyContent='center'>
            <Box width={[1, 0.7, 0.5]}>
              <Text
                pt={1}
                pb={2}
                dangerouslySetInnerHTML={{
                  __html: info.generalInformation.childMarkdownRemark.html
                }}
              />
            </Box>
          </Flex>
        </Box>
      </Layout>
    </Box>
  )
}

export default info

export const query = graphql`
  {
    allContentfulInfoPage {
      edges {
        node {
          generalInformation {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
