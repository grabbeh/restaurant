import React from 'react'
import Box from './Box'
import { Flex } from './Flex'
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa'

const Footer = () => (
  <Box width={1} className='footer' py={4} bg='petrol'>
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
)

export default Footer
