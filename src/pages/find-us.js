import React from 'react'
import Box from '../components/Box'
import { Link } from 'gatsby'
import Button from '../components/Button'
import Flex from '../components/Flex'
import Text from '../components/Text'
import Layout from '../components/Layout'
import ExternalLink from '../components/Link'
import Image from '../components/Image'
import ContactDetails from '../components/ContactDetails'
import TravelDetails from '../components/TravelDetails'

const findUs = () => {
  const mapUrl =
    'https://api.mapbox.com/v4/mapbox.high-contrast/pin-l-marker+ff8000(-0.112480,51.573640)/-0.112480,51.573640,15/640x380@2x.png?access_token=pk.eyJ1IjoiZ3JhYmJlaCIsImEiOiI0TTVQdGh3In0.V7O34fiEsepXVdPVxfnOQA'
  const directionsUrl =
    "https://www.google.co.uk/maps/dir//''/@51.5735535,-0.1299459,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x48761b26736b201b:0x51354017450282c6!2m2!1d-0.112436!2d51.5735877!3e0"
  return (
    <Layout>
      <Box>
        <Flex justifyContent='center'>
          <Box px={3} pt={3} width={[1, 0.7, 0.5]} maxWidth={1200}>
            <Image src={mapUrl} />
            <Flex justifyContent='flex-end'>
              <ExternalLink href='https://www.mapbox.com/map-feedback/'>
                <Text.span fontSize={1} mr={2}>
                  © Mapbox
                </Text.span>
              </ExternalLink>
              <ExternalLink href='https://www.openstreetmap.org/copyright'>
                <Text.span fontSize={1}>© OpenStreetMap</Text.span>
              </ExternalLink>
            </Flex>
          </Box>
        </Flex>
        <Box>
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
                  <Box width={[1, 0.8, 0.7]}>
                    <TravelDetails />
                  </Box>
                  <Box width={[1, 0.8, 0.3]} mt={[4, 4, 0]}>
                    <ContactDetails />
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
    </Layout>
  )
}

export default findUs
