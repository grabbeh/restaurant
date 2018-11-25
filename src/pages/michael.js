import React from 'react'
import { Flex } from '../components/Flex'
import Box from '../components/Box'
import Tabs from '../components/Tabs'
import TabList from '../components/TabList'
import Tab from '../components/Tab'
import TabPanels from '../components/TabPanels'
import Text from '../components/Text'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import groupBy from 'lodash/groupBy'

const michael = props => {
  let menuItems = groupBy(
    props.data.allContentfulMenuItem.edges.map(i => {
      return i.node
    }),
    'type'
  )

  return (
    <Layout color='black' fontFamily='sansSerif'>
      <Box>
        <Flex flexWrap='wrap'>
          <Box height='100vh' width={[1, 0.5]}>
            <Box p={[3, 4]}>
              <Box width={350} borderBottom='3px solid' borderColor='red'>
                <Text
                  textAlign='center'
                  fontWeight='bold'
                  fontSize={5}
                  color='black'
                >
                  GOODS OFFICE
                </Text>
              </Box>
              <Box mt={3}>
                <Text color='dark-gray' fontSize={3}>
                  Serving a selection of cakes & pastries, salads & sandwiches and a selection of small plates in the evening
                </Text>
              </Box>
              <Box p={3} bg='go-orange' mt={3}>
                <Box mb={3} fontSize={3}>
                  <Text fontWeight='bold' color='black'>INFO</Text>
                </Box>

                <Box mb={1}>
                  <Text color='black' fontWeight='bold'>PHONE</Text>
                </Box>
                <Box mb={3}><Text color='black  '>02083407677</Text></Box>
                <Box mb={1}>
                  <Text color='black' fontWeight='bold'>ADDRESS</Text>
                </Box>
                <Box mb={3}>
                  <Text color='black'>1-3 Ferme Park Road, N4 4DS</Text>
                </Box>
                <Box mb={1}>
                  <Text color='black' fontWeight='bold'>HOURS</Text>
                </Box>
                <Text color='black'>Mon-Sun</Text>
                <Text color='black'>8:00 am - 11:30 pm</Text>
              </Box>
            </Box>
          </Box>
          <Box height='100vh' width={[1, 0.5]} bg='go-light-peach'>
            <Box p={[3, 4]}>
              <Tabs>
                <TabList>
                  <Tab>Menus</Tab>
                  <Tab>Events</Tab>
                </TabList>
                <TabPanels>
                  <MenuTabs {...menuItems} />
                  <div>Hello world</div>
                </TabPanels>
              </Tabs>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Layout>
  )
}

export default michael

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

const MenuTabs = props => {
  let { Brunch, Lunch, Drink, Dinner, Breakfast } = props
  return (
    <Box>
      <Tabs>
        <TabList>
          <Tab>Breakfast</Tab>
          <Tab>Brunch</Tab>
          <Tab>Lunch</Tab>
          <Tab>Evening</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanels>
          <Menu title='Breakfast' items={Breakfast} />
          <Menu title='Brunch' items={Brunch} />
          <Menu title='Lunch' items={Lunch} />
          <Menu title='Dinner' items={Dinner} />
          <Menu title='Drinks' items={Drink} />
        </TabPanels>
      </Tabs>
    </Box>
  )
}

const Menu = ({ title, items }) => (
  <Box>
    <Flex>
      <Box width={[1, 450]} zIndex={1}>
        <Box>
          <Text color='black' fontSize={3} fontWeight='bold'>{title}</Text>
          {items.map(({ name, price, description }) => {
            return (
              <Box key={name}>
                <Flex flexWrap='wrap'>
                  <Box width={0.8}>
                    <Text color='black' pt={3} fontSize={2} fontWeight='bold'>
                      {name}
                    </Text>
                    {description &&
                      <Text
                        color='black'
                        pt={1}
                        pb={2}
                        dangerouslySetInnerHTML={{
                          __html: description.childMarkdownRemark.html
                        }}
                      />}
                  </Box>
                  <Box width={0.1}>
                    <Flex justifyContent='flex-end'>
                      <Text
                        color='black'
                        lineHeight='1.7'
                        pt={3}
                      >{`£${price}`}</Text>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            )
          })}
        </Box>
      </Box>
    </Flex>
  </Box>
)
