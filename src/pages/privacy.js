import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Box from '../components/Box'
import Text from '../components/Text'
import { Flex } from '../components/Flex'
import { graphql } from 'gatsby'

const info = props => {
  let policy = props.data.allContentfulPrivacyPolicy.edges[0].node
  return (
    <Box>
      <Layout>
        <Header />
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

export default info

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
