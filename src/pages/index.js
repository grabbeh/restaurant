import React from 'react'
import Box from '../components/Box'
import { graphql, Link } from 'gatsby'
import Button from '../components/Button'
import Flex from '../components/Flex'
import Text from '../components/Text'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import ContactDetails from '../components/ContactDetails'

const Home = props => {
  let { node } = props.data.allContentfulHomePage.edges[0]
  let { headerImage, restaurantDescription, headerLink } = node
  return (
    <Layout>
      <Box>
        <Flex justifyContent='center'>
          <Box p={3} width={[1, 0.7, 0.5]} maxWidth={1200}>
            <Box width={1}>
              {headerLink ? (
                <Link to={`/${headerLink}`}>
                  <Img {...props} fluid={headerImage.fluid} />
                </Link>
              ) : (
                <Img {...props} fluid={headerImage.fluid} />
              )}
            </Box>
          </Box>
        </Flex>
        <Box>
          <Box p={3}>
            <Flex justifyContent='center'>
              <Box maxWidth={1200} width={[1, 0.7, 0.5]} mx={4}>
                <Box>
                  <Flex flexWrap='wrap' justifyContent='space-between'>
                    <Box maxWidth={1200} width={[1, 0.8, 0.7]}>
                      <Box mt={-30}>
                        <Text
                          fontWeight='bold'
                          fontSize={4}
                          dangerouslySetInnerHTML={{
                            __html:
                              restaurantDescription.childMarkdownRemark.html
                          }}
                        />
                      </Box>
                      <Box mt={3}>
                        <Box width={130} mt={3}>
                          <Link to='/menus'>
                            <Button bg='go-light-peach'>
                              <Text color='petrol'>MENUS</Text>
                            </Button>
                          </Link>
                        </Box>
                      </Box>
                    </Box>
                    <Box width={[1, 0.8, 0.25]} mt={[4, 4, 0]}>
                      <ContactDetails />
                    </Box>
                  </Flex>
                </Box>
                <Flex justifyContent='space-around'>
                  <Box mt={4}>
                    <Link to='/book'>
                      <Button>BOOK</Button>
                    </Link>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Flex justifyContent='center'>
          <Box p={3} mb={3} zIndex={2}>
            <Text textAlign='center' fontWeight='bold'>
              Reservations required for parties of 6 or more
            </Text>
          </Box>
        </Flex>
      </Box>
    </Layout>
  )
}

export default Home

export const query = graphql`
  query {
    allContentfulHomePage {
      edges {
        node {
          headerLink
          restaurantDescription {
            childMarkdownRemark {
              html
            }
          }
          headerImage {
            fluid(maxWidth: 1200) {
              ...GatsbyContentfulFluid_noBase64
            }
            description
          }
        }
      }
    }
  }
`
