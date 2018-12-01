import React from 'react'
import Box from '../components/Box'
import { Link } from 'gatsby'
import Button from '../components/Button'
import { Flex } from '../components/Flex'
import Text from '../components/Text'
import Layout from '../components/Layout'
import Header from '../components/Header'
import ExternalLink from '../components/Link'
import Image from '../components/Image'

const findUs = () => {
  const mapUrl =
    'https://api.mapbox.com/v4/mapbox.high-contrast/pin-l-marker+ff8000(-0.112480,51.573640)/-0.112480,51.573640,15/640x380@2x.png?access_token=pk.eyJ1IjoiZ3JhYmJlaCIsImEiOiI0TTVQdGh3In0.V7O34fiEsepXVdPVxfnOQA'
  const directionsUrl =
    "https://www.google.co.uk/maps/dir//''/@51.5735535,-0.1299459,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x48761b26736b201b:0x51354017450282c6!2m2!1d-0.112436!2d51.5735877!3e0"
  return (
    <Layout>
      <Header />
      <Box>
        <Box>
          <Flex justifyContent='center'>
            <Box px={3} pt={3} zIndex={1} width={[1, 0.7, 0.5]} maxWidth={1200}>
              <Flex justifyContent='center'>
                <Box>
                  <Image src={mapUrl} />
                  <Flex justifyContent='flex-end'>
                    <Box>
                      <ExternalLink href='https://www.mapbox.com/map-feedback/'>
                        <Text.span fontSize={1} mr={2}>
                          © Mapbox
                        </Text.span>
                      </ExternalLink>
                      <ExternalLink href='https://www.openstreetmap.org/copyright'>
                        <Text.span fontSize={1}>© OpenStreetMap</Text.span>
                      </ExternalLink>
                    </Box>
                  </Flex>
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
                <Box maxWidth={1200} width={[1, 0.7, 0.5]} mb={4}>
                  <Flex justifyContent='center'>
                    <Box mb={4}>
                      <ExternalLink target='_blank' href={directionsUrl}>
                        <Button color='petrol' bg='go-light-peach' width={150}>
                          GET DIRECTIONS
                        </Button>
                      </ExternalLink>
                    </Box>
                  </Flex>
                  <Flex flexWrap='wrap' justifyContent='space-between'>
                    <Box maxWidth={1200} width={[1, 0.8, 0.5]}>
                      <Text mb={2} caps fontWeight='bold'>
                        Nearest tube
                      </Text>
                      <Text mb={3}>Finsbury Park</Text>
                      <Text mb={2} caps fontWeight='bold'>
                        Nearest overground
                      </Text>
                      <Text mb={3}>Crouch Hill</Text>
                      <Text mb={2} caps fontWeight='bold'>
                        Buses
                      </Text>
                      <Text mb={3}>W3 from Finsbury Park</Text>
                    </Box>
                    <Box mt={[4, 4, 0]}>
                      <Box mb={2}>
                        <Text fontWeight='bold'>PHONE</Text>
                      </Box>
                      <Box mb={3}>
                        <Text>02083407677</Text>
                      </Box>
                      <Box mb={2}>
                        <Text fontWeight='bold'>ADDRESS</Text>
                      </Box>
                      <Box mb={3}>
                        <Text>1-3 Ferme Park Road, N4 4DS</Text>
                      </Box>
                      <Box mb={2}>
                        <Text fontWeight='bold'>HOURS</Text>
                      </Box>
                      <Text>Mon-Sun</Text>
                      <Text>8:00 am - 11:30 pm</Text>
                    </Box>
                  </Flex>
                  <Flex justifyContent='space-around'>
                    <Box width={130} my={4}>
                      <Link to='/book'>
                        <Button>BOOK</Button>
                      </Link>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default findUs
