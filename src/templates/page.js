import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Box from '../components/Box'
import Flex from '../components/Flex'
import Text from '../components/Text'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import styled from 'styled-components'

const Image = styled.img`
  width: 100%;
`
const components = {
  img: Image
}

const PostTemplate = props => {
  const {
    node: { title, content }
  } = props.data.allContentfulTemplatePage.edges[0]
  return (
    <MDXProvider components={components}>
      <Layout>
        <Flex justifyContent='center'>
          <Box px={3} pt={3} width={[1, 0.7, 0.5]} maxWidth={1200}>
            <Box>
              <Text textAlign='center' fontSize={4} fontWeight='bold'>
                {title}
              </Text>
            </Box>
            <MDXRenderer>{content.childMdx.body}</MDXRenderer>
          </Box>
        </Flex>
      </Layout>
    </MDXProvider>
  )
}

export const pageQuery = graphql`
  query($title: String!) {
    allContentfulTemplatePage(filter: { title: { eq: $title } }) {
      edges {
        node {
          title
          content {
            childMdx {
              body
            }
          }
        }
      }
    }
  }
`

export default PostTemplate
