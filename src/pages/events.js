import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Box from '../components/Box'
import Text from '../components/Text'

const events = (props) => {
  let { edges } = props.data.allContentfulEvent
  return (
  <Box>
    <Layout>
        <Header />
        <Box p={3}>
         <Text>Events!!!</Text>
         <Box>
          {edges.map(event => (
              <Event event={event} />
          ))}
        </Box>
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

const Event = ({event}) => {
  let { name, description } = event
  return (
    <Box>
    <Box>
    {name}
    </Box>
    <Box>
    <Box>
    <Text
      fontSize={2}
      dangerouslySetInnerHTML={{
       __html: description.childMarkdownRemark.html
      }}
      />
    </Box>
    </Box>
  )
}
