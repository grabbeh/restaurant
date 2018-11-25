import React, { Component } from 'react'
import Box from '../components/Box'
import { graphql, Link } from 'gatsby'
import Button from '../components/Button'
import { Flex } from '../components/Flex'
import Text from '../components/Text'
import Layout from '../components/Layout'
import { FaBars, FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Img from 'gatsby-image'
import Carousel from 'nuka-carousel'

class Example extends Component {
  state = {
    showPlaceholder: true
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({ showPlaceholder: false })
    }, 500)
  }

  render () {
    let { showPlaceholder } = this.state
    let { node } = this.props.data.allContentfulHomePage.edges[0]
    let { carouselImages, restaurantDescription } = node
    return (
      <Layout>
        <Box>
          <Box zIndex={1} bg='petrol' height={15} />
          <Flex justifyContent='center'>
            <Box
              mt={[3, 4, 4]}
              zIndex={1}
              width={[0.9, 0.8, 0.7]}
              maxWidth={1200}
            >
              <Flex flexWrap='wrap' justifyContent='space-between'>
                <Flex alignItems='center'>
                  <Box width={150}>
                    <Link to='/navigation'>
                      <Text color='petrol'><FaBars size={30} /></Text>
                    </Link>
                  </Box>
                </Flex>
                <Box mt={[2, 3, 3, 0]} width={[1, 1, 1, 0.5]}>
                  <img
                    style={{ width: '100%' }}
                    alt='GOODS OFFICE logo'
                    title='GOODS OFFICE logo'
                    src='/logo.PNG'
                  />
                </Box>
                <Flex alignItems='center'>
                  <Box mt={[2, 3, 3, 0]}>
                    <Link to='/book'>
                      <Button width={[1, 150]}>BOOK</Button>
                    </Link>
                  </Box>
                </Flex>
              </Flex>
              <Flex justifyContent='center'>
                <Box width={1} mt={4}>
                  {showPlaceholder &&
                    <Flex justifyContent='center'>
                      <Box width={[1]} height={350} bg='near-white' />
                    </Flex>}
                  {!showPlaceholder &&
                    <Carousel
                      autoplay
                      wrapAround
                      autoplayInterval={2000}
                      renderCenterLeftControls={({ previousSlide }) => (
                        <Box ml={[0, -3]}>
                          <Button onClick={previousSlide} px={1} py={1}>
                            <FaAngleLeft size={20} />
                          </Button>
                        </Box>
                      )}
                      renderCenterRightControls={({ nextSlide }) => (
                        <Box mr={[0, -3]}>
                          <Button onClick={nextSlide} px={1} py={1}>
                            <FaAngleRight size={20} />
                          </Button>
                        </Box>
                      )}
                    >
                      {carouselImages.map(i => (
                        <Img
                          style={{ height: '350px' }}
                          key={i.id}
                          backgroundColor={'#fafafa'}
                          fluid={i.fluid}
                          placeholderStyle={{ height: '350px' }}
                          alt={i.description}
                          title={i.description}
                        />
                      ))}
                    </Carousel>}
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
            <Flex justifyContent='center'>
              <Box
                maxWidth={1200}
                width={[0.9, 0.7, 0.7, 0.6]}
                mx={4}
                my={[3, 4, 4]}
              >
                <Flex flexWrap='wrap' justifyContent='space-between'>
                  <Box maxWidth={1200} width={[1, 0.8, 0.5]}>
                    <Text fontWeight='bold' fontSize={[2, 3]}>
                      CAFE, BAR AND RESTAURANT
                    </Text>
                    <Box mt={3}>
                      <Text
                        fontSize={2}
                        dangerouslySetInnerHTML={{
                          __html: restaurantDescription.childMarkdownRemark
                            .html
                        }}
                      />
                      <Box mt={4}>
                        <Link to='/menus'><Button>MENUS</Button></Link>
                      </Box>
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
                <Flex justifyContent='space-around'>
                  <Box mt={4}>
                    <Link to='/book'>
                      <Button width={150}>BOOK</Button>
                    </Link>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
          <Flex justifyContent='center'>
            <Box zIndex={2}>
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
          carouselImages {
            fluid(maxWidth: 600) {
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
