import React from 'react'
import Layout from '../components/Layout'
import Box from '../components/Box'
import Text from '../components/Text'
import { Flex } from '../components/Flex'

const index = ({ location }) => {
  return (
    <Layout location={location}>
      <Box position='relative'>
        <Box
          position='absolute'
          transform={3}
          className='w-100'
          bg='gold'
          height={[400, 450, 500]}
          zIndex={1}
          px={[3, 3, 4]}
        >
          <Box maxWidth={1200} width={[1]} mt={[4, 5]}>
            <Text
              transform={3}
              fontWeight='bold'
              color='dark-gray'
              fontSize={[5, 6]}
              className='zilla'
            >
              GOODS OFFICE
            </Text>
          </Box>
          <Box mt={3} width={[0.9, 0.7, 0.4]}>
            <Text lineHeight='1.5' fontSize={3} transform={3}>
              We serve brunch, a selection of cakes & pastries, salads & sandwiches all day, and small plates in the evening
            </Text>
          </Box>
        </Box>
        <Box className='concrete' position='relative' height={300} />
        <Box height={300} className='concrete' pb={5} pt={[6, 5]} mb={0}>
          <Flex justifyContent='flex-end' flexWrap='wrap'>
            <Box className='concrete' pl={[3, 0]} width={[1, 1 / 4]} bg='white'>
              <Text fontSize={3} fontWeight='bold'>
                Opening Hours
              </Text>
              <Text pt={2} fontSize={2}>
                Mon - Sun: 8:00 am - 11:30 pm
              </Text>
            </Box>
            <Box
              className='concrete'
              mt={[3, 0]}
              pl={[3, 0]}
              width={[1, 1 / 4]}
              bg='white'
            >
              <Text fontSize={3} fontWeight='bold'>
                Contact
              </Text>
              <Text pt={2} fontSize={2}>
                1-3 Ferme Park Road, N4 4DS
              </Text>
              <Text pt={1} fontSize={2}>
                <a className='link black' href='tel:02083407677'>
                  {' '}02083407677
                </a>
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Layout>
  )
}

export default index

/*
export const query = graphql``
*/
