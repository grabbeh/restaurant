import React from 'react'
import { Link } from 'gatsby'
import Box from './Box'
import Text from './Text'
import Flex from './Flex'
import Button from './Button'
import Logo from './Logo'
import { FaBars } from 'react-icons/fa'

const Header = () => (
  <Box>
    <Box zIndex={1} bg='petrol' height={10} />
    <Box>
      <Box zIndex={1}>
        <Flex justifyContent='center'>
          <Box p={3} width={[1, 1, 0.7]} maxWidth={1200} mt={[3, 4, 4]}>
            <Flex justifyContent='space-between' flexWrap='wrap'>
              <Flex alignItems='center'>
                <Box mr={[20, 50, 100]}>
                  <Link to='/navigation'>
                    <Text width={20} color='petrol'>
                      <FaBars size={30} />
                    </Text>
                  </Link>
                </Box>
              </Flex>
              <Box my={[2, 2, 0]} width={[1, 0.8, 0.5]}>
                <Link to='/'>
                  <Logo />
                </Link>
              </Box>
              <Flex alignItems='center'>
                <Box mt={[2, 2, 0]}>
                  <Link to='book'>
                    <Button>BOOK</Button>
                  </Link>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  </Box>
)

export default Header
