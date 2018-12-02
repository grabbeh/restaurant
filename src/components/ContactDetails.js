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
    <Text fontSize={14}>Mon-Sun</Text>
    <Text fontSize={14}>8:00 am - 11:30 pm</Text>
  </Fragment>
)

export default ContactDetails
