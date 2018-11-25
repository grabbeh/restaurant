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
    <Flex justifyContent='center'>
      <Box zIndex={1} width={[0.9, 0.8, 0.7]} maxWidth={1200}>
        <Box mt={[3, 4, 4]}>
          <Flex flexWrap='wrap' justifyContent='space-between'>
            <Flex alignItems='center'>
              <Box width={150}>
                <Link to='/menu'>
                  <Text color='petrol'><FaBars size={30} /></Text>
                </Link>
              </Box>
            </Flex>
            <Box mt={[2, 3, 3, 0]} width={[1, 1, 1, 0.5]}>
              <Link to='/'>
                <img
                  style={{ width: '100%' }}
                  alt='GOODS OFFICE logo'
                  title='GOODS OFFICE logo'
                  src='/logo.PNG'
                />
              </Link>
            </Box>
            <Flex alignItems='center'>
              <Box mt={[2, 3, 3, 0]}>
                <Link to='book'>
                  <Button width={150}>FIND A TABLE</Button>
                </Link>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  </Box>
)

export default Header
