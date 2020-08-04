import React, { Fragment } from 'react'
import Box from './Box'
import Text from './Text'

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
    <Text fontSize={14}>Open everyay</Text>
    <Text fontSize={14}>9am - 11pm</Text>

  </Fragment>
)

export default ContactDetails
