import React from 'react'
import { Link } from 'gatsby'
import Box from './Box'
import Text from './Text'
import { Flex } from './Flex'
import Button from './Button'
import { FaBars } from 'react-icons/fa'

const Header = () => (
  <Box>
    <Box p={[3, 4]}>
      <Flex justifyContent='center'>
        <Box zIndex={1} width={1}>
          <Box>
            <Flex flexWrap='wrap' justifyContent='space-between'>
              <Flex alignItems='center'>
                <Box>
                  <Link to='/navigation'>
                    <Text color='petrol'><FaBars size={30} /></Text>
                  </Link>
                </Box>
              </Flex>
              <Box width={[1, 1, 1, 0.5]}>
                <Link to='/'>
                  <img
                    style={{ width: '100%' }}
                    alt='GOODS OFFICE logo'
                    title='GOODS OFFICE logo'
                    src='/go.png'
                  />
                </Link>
              </Box>
              <Flex alignItems='center'>
                <Box mt={[2, 3, 3, 0]}>
                  <Link to='book'>
                    <Button px={[3, 4]} py={[2, 3]} width={150}>BOOK</Button>
                  </Link>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Box>

      </Flex>
    </Box>
  </Box>
)

export default Header
