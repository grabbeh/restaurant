import React from 'react'
import Box from '../components/Box'
import { graphql } from 'gatsby'
import Button from '../components/Button'
import { Flex } from '../components/Flex'
import Text from '../components/Text'
import Layout from '../components/Layout'
import {
  FaBars,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaAngleLeft,
  FaAngleRight
} from 'react-icons/fa'
import Img from 'gatsby-image'
import Carousel from 'nuka-carousel'

const example = props => {
  const {
    carouselImages,
    restaurantDescription: { childMarkdownRemark: { html } }
  } = props.data.allContentfulHomePage.edges[0].node
  return (
    <Layout>
      <Box height='100vh'>
        <Box zIndex={1} bg='petrol' height={15} />
        <Flex justifyContent='center'>
          <Box zIndex={1} width={[0.9, 0.8, 0.7]} maxWidth={1200}>
            <Box mt={[3, 4, 4]}>
              <Flex flexWrap='wrap' justifyContent='space-between'>
                <Flex alignItems='center'>
                  <Box><Text color='petrol'><FaBars size={30} /></Text></Box>
                </Flex>
                <Box mt={[2, 3, 3, 0]} width={[1, 1, 1, 450]}>
                  <img
                    style={{ width: '100%' }}
                    alt='GOODS OFFICE logo'
                    title='GOODS OFFICE logo'
                    src='/logo.PNG'
                  />
                </Box>
                <Flex alignItems='center'>
                  <Box mt={[2, 3, 3, 0]}>
                    <Button width={150}>FIND A TABLE</Button>
                  </Box>
                </Flex>
              </Flex>
            </Box>
            <Flex justifyContent='center'>
              <Box width={[1, 0.9, 0.8]} mt={4}>
                <Carousel
                  autoplay
                  wrapAround
                  initialSlideWidth={600}
                  autoplayInterval={2000}
                  renderCenterLeftControls={({ previousSlide }) => (
                    <Box>
                      <Button onClick={previousSlide} px={1} py={1}>
                        <FaAngleLeft size={20} />
                      </Button>
                    </Box>
                  )}
                  renderCenterRightControls={({ nextSlide }) => (
                    <Box>
                      <Button onClick={nextSlide} px={1} py={1}>
                        <FaAngleRight size={20} />
                      </Button>
                    </Box>
                  )}
                >
                  {carouselImages.map(i => (
                    <Box key={i.id} height={350}>
                      <Img
                        fluid={i.fluid}
                        alt={i.description}
                        title={i.description}
                      />
                    </Box>
                  ))}
                </Carousel>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Box>
          <Box
            bg='go-light-peach'
            height={550}
            mt={-100}
            width='100%'
            transform={2}
            position='absolute'
          />
          <Box position='relative'>
            <Flex justifyContent='center'>
              <Box width={[0.9, 0.8, 0.7]} py={[3, 4, 4]}>
                <Flex flexWrap='wrap' justifyContent='space-between'>
                  <Box width={[1, 1, 0.4]}>
                    <Text fontWeight='bold' fontSize={3}>
                      CAFE/BAR/RESTAURANT
                    </Text>
                    <Box mt={3}>
                      <Text
                        fontSize={2}
                        dangerouslySetInnerHTML={{ __html: html }}
                      />
                      <Box mt={4}><Button>MENU</Button></Box>
                    </Box>
                  </Box>
                  <Box mt={[4, 4, 0]}>
                    <Box mb={2}><Text fontWeight='bold'>PHONE</Text></Box>
                    <Box mb={3}><Text>02083407677</Text></Box>
                    <Box mb={2}><Text fontWeight='bold'>ADDRESS</Text></Box>
                    <Box mb={3}><Text>1-3 Ferme Park Road, N4 4DS</Text></Box>
                    <Box mb={2}><Text fontWeight='bold'>HOURS</Text></Box>
                    <Text>Mon-Sun</Text>
                    <Text>8:00 am - 11:30 pm</Text>
                  </Box>
                </Flex>
                <Flex justifyContent='space-around' />
                <Flex justifyContent='space-around'>
                  <Box mt={4}><Button width={150}>FIND A TABLE</Button></Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Flex justifyContent='center'>
          <Box zIndex={2} mt={3}>
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
        <Box zIndex={2} bg='petrol' py={4}>
          <Flex justifyContent='center'>
            <Box color='white' mr={4}>
              <FaInstagram size={30} />
            </Box>
            <Box color='white' mr={4}><FaFacebookF size={30} /></Box>
            <Box color='white'>
              <FaTwitter size={30} />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Layout>
  )
}

export default example

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
          carouselImages {
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid_noBase64
            }
            id
            description
          }
        }
      }
    }
  }
  
`
