import React, { Component } from 'react'
import Box from '../components/Box'
import { graphql, Link } from 'gatsby'
import Button from '../components/Button'
import { Flex } from '../components/Flex'
import Text from '../components/Text'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import Header from '../components/Header'
import ContactDetails from '../components/ContactDetails'

class Example extends Component {
  render () {
    let { node } = this.props.data.allContentfulHomePage.edges[0]
    let { headerImage, restaurantDescription } = node
    return (
      <Layout>
        <Header />
        <Box>
          <Flex justifyContent='center'>
            <Box p={3} zIndex={1} width={[1, 0.7, 0.5]} maxWidth={1200}>
              <Box width={1}>
                <Img fluid={headerImage.fluid} />
              </Box>
            </Box>
          </Flex>
          <Box
            bg='go-light-peach'
            height={500}
            mt={-100}
            width='100%'
            transform={2}
            position='absolute'
          />
          <Box position='relative'>
            <Box p={3}>
              <Flex justifyContent='center'>
                <Box maxWidth={1200} width={[1, 0.7, 0.5]} mx={4}>
                  <Box>
                    <Flex flexWrap='wrap' justifyContent='space-between'>
                      <Box maxWidth={1200} width={[1, 0.8, 0.7]}>
                        <Text fontWeight='bold' fontSize={[3, 4]}>
                          FRIENDLY NEIGHBOURHOOD CAFE, BAR AND RESTAURANT
                        </Text>
                        <Box mt={3}>
                          <Text
                            fontSize={3}
                            dangerouslySetInnerHTML={{
                              __html:
                                restaurantDescription.childMarkdownRemark.html
                            }}
                          />
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
                    <Box mt={5}>
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
}

export default Example

export const query = graphql`
  {
    allContentfulHomePage {
      edges {
        node {
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
