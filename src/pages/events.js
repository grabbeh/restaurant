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
          {edges.map(({node}) => (
              <Event event={node} />
          ))}
        </Box>
        <Box p={3} bg='black'>
          <Text color='white'> Hello</Text>
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
  console.log(event)
  let { name, description } = event
  console.log(name)
  return (
    <Box>
      <Box>
        {name}
       </Box>
    </Box>
  )
}
