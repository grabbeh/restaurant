import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Box from '../components/Box'
import { Flex } from '../components/Flex'
import Text from '../components/Text'
import Header from '../components/Header'
import groupBy from 'lodash/groupBy'

const evening = props => {
  console.log(props)
  let menuItems = groupBy(
    props.data.allContentfulMenuItem.edges.map(i => {
      return i.node
    }),
    'type'
  )
  
  let { Brunch, Lunch, Drink, Dinner, Breakfast } = props 
 
  return (
    <Layout bg='go-light-peach'>
      <Header />
      <Box>
        <Flex justifyContent='center'>
         <Box width={[1, 450]} zIndex={1}>
          <Menu title='Breakfast' items={Breakfast}/>
          <Menu title='Brunch' items={Brunch}/>
          <Menu title='Lunch' items={Lunch}/>
          <Menu title='Dinner' items={Dinner}/>
          <Menu title='Drinks' items={Drink}/>
        </Box>
      </Flex>
    </Box>
    </Layout>
  )
}

export default evening

export const query = graphql`
   {
      allContentfulMenuItem {
        edges {
          node {
            name
            price
            description {
              childMarkdownRemark {
                html
              }
            }
            type
          }
        }
      }
    }
  
`

const Menu = ({ items, title }) => {
  return (
  <Box mx={3} my={4}>
   <Text fontSize={3} fontWeight='bold'>{title}</Text>
     {items.map(({ name, price, description  }) => {
      return (
        <Box key={name}>
          <Flex flexWrap='wrap'>
             <Box width={0.8}>
                <Text pt={3} fontSize={2} fontWeight='bold'>
                     {name}
                </Text>
                {description &&
                <Text
                      pt={1}
                      pb={2}
                      dangerouslySetInnerHTML={{
                                __html: description.childMarkdownRemark.html
                      }}
                />}
              </Box>
              <Box width={0.1}>
               <Flex justifyContent='flex-end'>
                   <Text lineHeight='1.7' pt={3}>{`£${price}`}</Text>
               </Flex>
            </Box>
         </Flex>
       </Box>
     )
   })}
 </Box>
)}
