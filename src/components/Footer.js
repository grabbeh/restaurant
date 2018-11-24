import React from 'react'
import { Link } from 'gatsby'
import Box from './Box'
import { Flex } from './Flex'
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa'

const Footer = () => (
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
)

export default Footer
