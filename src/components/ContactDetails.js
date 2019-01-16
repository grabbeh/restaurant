import React, { Fragment } from 'react'
import Box from '../components/Box'
import Text from '../components/Text'

const ContactDetails = () => (
  <Fragment>
    <Box mb={2}>
      <Text fontSize={14} fontWeight='bold'>
        PHONE
      </Text>
    </Box>
    <Box mb={3}>
      <Text fontSize={14}>02083407677</Text>
    </Box>
    <Box mb={2}>
      <Text fontSize={14} fontWeight='bold'>
        ADDRESS
      </Text>
    </Box>
    <Box mb={3}>
      <Text fontSize={14}>
        1-3 Ferme Park Road, Stroud Green, London, N4 4DS
      </Text>
    </Box>
    <Box mb={2}>
      <Text fontSize={14} fontWeight='bold'>
        HOURS
      </Text>
    </Box>
    <Text fontSize={14}>Mon - Friday</Text>
    <Text fontSize={14}>8am - 11pm</Text>
    <Box mt={2}>
      <Text fontSize={14}>Saturday & Sunday</Text>
      <Text fontSize={14}>9am - 11pm</Text>
    </Box>
  </Fragment>
)

export default ContactDetails
