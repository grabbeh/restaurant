import React from 'react'
import Layout from '../components/Layout'
import Box from '../components/Box'
import Text from '../components/Text'
import Flex from '../components/Flex'
import { graphql } from 'gatsby'

const christmas = props => {
  const {
    node: { content, pageTitle }
  } = props.data.allContentfulChristmasPage.edges[0]
  return (
    <Box>
      <Layout>
        <Box p={3}>
          <Flex justifyContent='center'>
            <Box py={3} width={[1, 1, 0.5]}>
              <Text fontWeight='bold' fontSize={4}>
                {pageTitle}
              </Text>
              <Text
                dangerouslySetInnerHTML={{
                  __html: content.childMarkdownRemark.html
                }}
              />
            </Box>
          </Flex>
        </Box>
      </Layout>
    </Box>
  )
}

export default christmas

export const query = graphql`
  query {
    allContentfulChristmasPage {
      edges {
        node {
          pageTitle
          content {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
