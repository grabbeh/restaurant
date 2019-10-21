import React from 'react'
import Layout from '../components/Layout'
import Box from '../components/Box'
import Text from '../components/Text'
import Flex from '../components/Flex'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import styled from 'styled-components'

const Image = styled.img`
  width: 100%;
`
const components = {
  img: Image
}

const christmas = props => {
  const {
    node: { content, pageTitle }
  } = props.data.allContentfulChristmasPage.edges[0]
  return (
    <MDXProvider components={components}>
      <Box>
        <Layout>
          <Box p={3}>
            <Flex justifyContent='center'>
              <Box py={3} width={[1, 1, 0.5]}>
                <Text fontWeight='bold' fontSize={4}>
                  {pageTitle}
                </Text>
                <MDXRenderer>{content.childMdx.body}</MDXRenderer>
              </Box>
            </Flex>
          </Box>
        </Layout>
      </Box>
    </MDXProvider>
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
            childMdx {
              body
            }
          }
        }
      }
    }
  }
`
