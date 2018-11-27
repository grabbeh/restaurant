import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Box from '../components/Box'
import Text from '../components/Text'

const find = () => (
  <Box>
    <Layout>
        <Header />
        <Box p={3}>
         <Text>Find us!!!</Text>
        </Box>
    </Layout>
  </Box>
 )

export default find
