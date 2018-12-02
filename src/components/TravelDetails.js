import React, { Fragment } from 'react'
import Text from '../components/Text'

const TravelDetails = () => (
  <Fragment>
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
  </Fragment>
)

export default TravelDetails
