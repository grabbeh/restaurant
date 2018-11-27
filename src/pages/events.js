import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Box from '../components/Box'
import Text from '../components/Text'

const events = (props) => {
  console.log(props)
  return (
  <Box>
    <Layout>
        <Header />
        <Box p={3}>
         <Text>Events!!!</Text>
        </Box>
    </Layout>
  </Box>
 )
}

export default events

export const query = graphql`
   {
      allContentfulEvent {
        edges {
          node {
            name
            date
            description {
              childMarkdownRemark {
                html
              }
            }
            recurring
          }
        }
      }
    }
  
`
