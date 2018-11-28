import React from 'react'
import { Link } from 'gatsby'
import Box from '../components/Box'
import Text from '../components/Text'
import { Flex } from '../components/Flex'
import Button from '../components/Button'
import { FaBars } from 'react-icons/fa'

const Header = () => (
  <Box>
    <Box zIndex={1} bg='petrol' height={15} />
    <Box>
      <Flex justifyContent='center'>
        <Box zIndex={1}>
          <Box p={3} maxWidth={1200} mt={[3, 4, 4]}>
            <Flex justifyContent='space-between' flexWrap='wrap'>
              <Flex alignItems='center'>
                <Box mr={[20, 50, 100]}>
                  <Link to='/navigation'>
                    <Text width={20} color='petrol'><FaBars size={30} /></Text>
                  </Link>
                </Box>
              </Flex>
              <Box my={[2, 2, 0]} width={[1, 0.8, 0.5]}>
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
                <Box width={130}>
                  <Link to='book'>
                    <Button>BOOK</Button>
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
