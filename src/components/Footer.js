import React from 'react'
import Box from './Box'
import Flex from './Flex'
import Text from './Text'
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { Link } from 'gatsby'
import ExternalLink from './Link'

const Footer = () => (
  <Box zIndex={5} width={1} className='footer' bg='petrol'>
    <Box p={3}>
      <Flex justifyContent='space-between' flexWrap='wrap'>
        <Text.span color='white'>
          <Text.span mr={3}>
            <ExternalLink href='https://www.instagram.com/thegoodsoffice/'>
              <FaInstagram style={{ color: 'white' }} size={20} />
            </ExternalLink>
          </Text.span>
          <Text.span mr={3}>
            <ExternalLink href='https://facebook.com/goodsofficeN4/'>
              <FaFacebookF style={{ color: 'white' }} size={20} />
            </ExternalLink>
          </Text.span>
          <ExternalLink href='https://twitter.com/goodsofficeN4'>
            <FaTwitter style={{ color: 'white' }} size={20} />
          </ExternalLink>
        </Text.span>
        <Text.span>
          <Text.span mr={3} fontSize={1} color='white'>
            AND NEIL LTD (Company number 11156023) trading as the Goods Office
          </Text.span>
          <Link to='/privacy'>
            <Text.span mr={3} fontSize={1} color='white'>
              Privacy
            </Text.span>
          </Link>
          <Link to='/terms'>
            <Text.span fontSize={1} color='white'>
              Terms
            </Text.span>
          </Link>
        </Text.span>
      </Flex>
    </Box>
  </Box>
)

export default Footer
