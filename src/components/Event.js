import React from 'react'
import Box from '../components/Box'
import Text from '../components/Text'
import { Flex } from '../components/Flex'
import Button from '../components/Button'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const Event = ({ event }) => {
  let { eventImage } = event
  return (
    <Box px={1} py={3} borderBottom='3px solid' borderColor='petrol'>
      {eventImage ? <EventWithImage {...event} /> : <EventText {...event} />}
    </Box>
  )
}

export default Event

const EventWithImage = props => (
  <Box>
    <Flex flexWrap='wrap' justifyContent='space-between'>
      <Box width={[1, 0.5]} mb={3}>
        <Box mr={[0, 4]}><Img fluid={props.eventImage.fluid} /></Box>
      </Box>
      <Box width={[1, 0.5]}>
        <EventText {...props} />
      </Box>
    </Flex>
  </Box>
)

const EventText = ({ name, date, description }) => (
  <Box>
    <Box mb={3}>
      <Text fontSize={3} fontWeight='bold' caps>{name}</Text>
    </Box>
    <Box mb={3}>
      <Text fontSize={2} fontWeight='bold' caps>{date}</Text>
    </Box>
    <Box>
      <Text
        fontSize={2}
        dangerouslySetInnerHTML={{
          __html: description.childMarkdownRemark.html
        }}
      />
    </Box>
    <Box width={130} my={3}>
      <Link to='/book'>
        <Button bg='go-light-peach'>
          <Text fontWeight='bold' caps>Book now</Text>
        </Button>
      </Link>
    </Box>
  </Box>
)