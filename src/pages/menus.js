import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Box from '../components/Box'
import { Flex } from '../components/Flex'
import Text from '../components/Text'
import Header from '../components/Header'
import Link from '../components/Link'

const evening = props => {
  let { menus } = props.data.allContentfulMenuHolder.edges[0].node
  return (
    <Layout>
      <Header />
      <Box p={3}>
        <Flex justifyContent='center'>
          <Box width={[1, 0.8]} zIndex={1}>
            <a href='#home' name='home'>
              <div id='home' />
              <Text textAlign='center' caps fontWeight='bold' fontSize={3}>
                Menus
              </Text>
            </a>
            <Box mb={4} mt={3}>
              <Flex justifyContent='center' flexWrap='wrap'>
                <MenuList menus={menus} />
              </Flex>
            </Box>
            <Box>
              {menus.map(m => {
                let {
                  link,
                  name,
                  fullMenu: {
                    childMarkdownRemark: { html }
                  }
                } = m
                return (
                  <Box key={m.name}>
                    <Link href={`#${link}`} name={link}>
                      <div id={link} />
                    </Link>
                    <MarkDownMenu title={name} html={html} />
                  </Box>
                )
              })}
            </Box>
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
      <Box position='fixed' bottom={0} right={0} p={3} zIndex={4}>
        <Flex justifyContent='flex-end'>
          <a href='#home'>
            <Text caps fontWeight='bold'>
              Top
            </Text>
          </a>
        </Flex>
      </Box>
    </Layout>
  )
}

export default evening

export const query = graphql`
  {
    allContentfulMenuHolder {
      edges {
        node {
          menus {
            name
            link
            fullMenu {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  }
`

const MenuList = ({ menus }) => (
  <Fragment>
    {menus.map(m => (
      <Box
        key={m.name}
        px={3}
        mb={2}
        borderRight='2px solid'
        borderColor='petrol'
      >
        <a href={`#${m.link}`}>
          <Text caps fontWeight='bold'>
            {m.name}
          </Text>
        </a>
      </Box>
    ))}
  </Fragment>
)

const MarkDownMenu = ({ html, title }) => {
  return (
    <MenuHolder title={title}>
      <Text
        pb={2}
        dangerouslySetInnerHTML={{
          __html: html
        }}
      />
    </MenuHolder>
  )
}

const MenuHolder = ({ title, children }) => {
  return (
    <Box mx={3} mt={4}>
      <Flex justifyContent='center'>
        <Box
          borderLeft='2px solid'
          borderTop='2px solid'
          borderRight='2px solid'
          borderBottom='2px solid'
          borderColor='petrol'
          py={1}
          px={2}
        >
          <Text caps textAlign='center' fontSize={3} fontWeight='bold'>
            {title}
          </Text>
        </Box>
      </Flex>
      <Flex justifyContent='center'>
        <Box width={[1, 0.7, 0.5]}>{children}</Box>
      </Flex>
    </Box>
  )
}

// Used where menu is formed of multiple items rather than markdown
/*
const ItemsMenu = ({ items, title }) => {
  return (
    <MenuHolder title={title}>
      {items.map(({ name, price, description }) => {
        return (
          <Box key={name}>
            <Flex flexWrap='wrap'>
              <Box width={[1, 0.7, 0.5]}>
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
    </MenuHolder>
  )
} */
