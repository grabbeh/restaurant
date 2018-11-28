import React, { Component } from 'react'
import Box from '../components/Box'
import { graphql, Link } from 'gatsby'
import Button from '../components/Button'
import { Flex } from '../components/Flex'
import Text from '../components/Text'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import Header from '../components/Header'

class Example extends Component {
  render () {
    let { node } = this.props.data.allContentfulHomePage.edges[0]
    let { headerImage, restaurantDescription } = node
    return (
      <Layout>
        <Header />
        <Box>
          <Box>
            <Flex justifyContent='center'>
              <Box p={3} zIndex={1} width={[1, 0.7, 0.5]} maxWidth={1200}>
                <Flex justifyContent='center'>
                  <Box width={1}>
                    <Img fluid={headerImage.fluid} />
                  </Box>
                </Flex>
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
                    <Flex flexWrap='wrap' justifyContent='space-between'>
                      <Box maxWidth={1200} width={[1, 0.8, 0.5]}>
                        <Text fontWeight='bold' fontSize={[3, 4]}>
                          CAFE, BAR AND RESTAURANT
                        </Text>
                        <Box mt={3}>
                          <Text
                            fontSize={3}
                            dangerouslySetInnerHTML={{
                              __html: restaurantDescription.childMarkdownRemark
                                .html
                            }}
                          />
                          <Box width={130} mt={3}>
                            <Link to='/menus'>
                              <Button>MENUS</Button>
                            </Link>
                          </Box>
                        </Box>
                      </Box>
                      <Box mt={[4, 4, 0]}>
                        <Box mb={2}><Text fontWeight='bold'>PHONE</Text></Box>
                        <Box mb={3}><Text>02083407677</Text></Box>
                        <Box mb={2}><Text fontWeight='bold'>ADDRESS</Text></Box>
                        <Box mb={3}>
                          <Text>1-3 Ferme Park Road, N4 4DS</Text>
                        </Box>
                        <Box mb={2}><Text fontWeight='bold'>HOURS</Text></Box>
                        <Text>Mon-Sun</Text>
                        <Text>8:00 am - 11:30 pm</Text>
                      </Box>
                    </Flex>
                    <Flex justifyContent='space-around'>
                      <Box width={130} mt={4}>
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
              <Box mt={2} zIndex={2}>
                <Text textAlign='center'>
                  Call us or book online with Open Table
                </Text>
                <Box my={4}>
                  <Text textAlign='center' fontWeight='bold'>
                    Reservations required for parties of 6 or more
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>
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
              ...GatsbyContentfulFluid
            }
            description
          }
          carouselImages {
            fluid(maxWidth: 1200) {
              ...GatsbyContentfulFluid
            }
            id
            description
          }
        }
      }
    }
  }
  
`
