import React from 'react'
import Layout from '../components/Layout'
import Box from '../components/Box'
import { Flex } from '../components/Flex'
import Header from '../components/Header'
import Button from '../components/Button'
import { Link } from 'gatsby'

const menu = () => {
  return (
    <Layout>
      <Header />
      <Box>
        <Box>
          <Flex justifyContent='center'>
            <Box my={4}>
              <Flex justifyContent='center'>
                <Link to='/breakfast'>
                  <Button mb={4} width={200}>
                    BREAKFAST
                  </Button>
                </Link>
              </Flex>
              <Flex justifyContent='center'>
                <Link to='/evening'>
                  <Button mb={4} width={200}>
                    LUNCH
                  </Button>
                </Link>
              </Flex>
              <Flex justifyContent='center'>
                <Link to='/dinner'>
                  <Button mb={4} width={200}>
                    DINNER
                  </Button>
                </Link>
              </Flex>
              <Flex justifyContent='center'>
                <Link to='/evening'>
                  <Button mb={4} width={200}>
                    ALL DAY
                  </Button>
                </Link>
              </Flex>
              <Flex justifyContent='center'>
                <Link to='/drinks'>
                  <Button mb={4} width={200}>
                    DRINKS
                  </Button>
                </Link>
              </Flex>
              <Flex justifyContent='center'>
                <Link to='/evening'>
                  <Button mb={4} width={200}>
                    EVENTS
                  </Button>
                </Link>
              </Flex>
              <Flex justifyContent='center'>
                <Link to='/evening'>
                  <Button mb={4} width={200}>
                    ABOUT
                  </Button>
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Layout>
  )
}

export default menu
