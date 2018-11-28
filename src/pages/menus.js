import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Box from '../components/Box'
import { Flex } from '../components/Flex'
import Text from '../components/Text'
import Header from '../components/Header'
import groupBy from 'lodash/groupBy'

const evening = props => {
  let { edges } = props.data.allContentfulMenuItem
  let menuItems = edges.map(i => {
    return i.node
  })

  let { Brunch, Lunch, Drink, Dinner, Breakfast } = groupBy(menuItems, 'type')
  // TO-DO - put food/drink menus in gatsby-config.json
  let menuTypes = ['Breakfast', 'Brunch', 'Lunch', 'Dinner', 'Drinks']
  return (
    <Layout>
      <Header />
      <Box p={3} mt={3}>
        <Flex justifyContent='center'>
          <Box width={[1, 0.7, 0.5]} zIndex={1}>
            <Text textAlign='center' caps fontWeight='bold' fontSize={2}>
              Menus
            </Text>
            <Box my={4}>
              <Flex justifyContent='center' flexWrap='wrap'>
                {menuTypes.map(menu => (
                  <Box
                    px={3}
                    py={2}
                    borderRight='2px solid'
                    borderColor='petrol'
                  >
                    <Text caps fontWeight='bold'>
                      {menu}
                    </Text>
                  </Box>
                ))}
              </Flex>
            </Box>
            <Menu title='Breakfast' items={Breakfast} />
            <Menu title='Brunch' items={Brunch} />
            <Menu title='Lunch' items={Lunch} />
            <Menu title='Dinner' items={Dinner} />
            <Menu title='Drinks' items={Drink} />
          </Box>
        </Flex>
      </Box>
      <Box
        bg='go-light-peach'
        height={500}
        mt={500}
        width='100%'
        transform={2}
        position='absolute'
      />
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
    <Box mx={3} mt={3} mb={4}>
      <Flex justifyContent='center'>
        <Box
          borderLeft='2px solid'
          borderTop='2px solid'
          borderRight='2px solid'
          borderBottom='2px solid'
          borderColor='petrol'
          width={150}
          py={1}
        >
          <Text caps textAlign='center' fontSize={3} fontWeight='bold'>{title}</Text>
        </Box>
      </Flex>
      {items.map(({ name, price, description }) => {
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
  )
}
