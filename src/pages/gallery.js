import React, { useState } from 'react'
import Layout from '../components/Layout'
import Box from '../components/Box'
import Text from '../components/Text'
import Flex from '../components/Flex'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import styled, { css } from 'styled-components'

const gallery = ({
  data: {
    allContentfulImage: { edges }
  }
}) => {
  let [mainImage, setImage] = useState(edges[0].node.image)
  return (
    <Box>
      <Layout>
        <Box>
          <Flex justifyContent='center'>
            <Box p={3} width={[1, 0.7, 0.5]} zIndex={1}>
              <Box mb={2}>
                <Text fontSize={3} caps fontWeight='bold' textAlign='center'>
                  Gallery
                </Text>
              </Box>
              <Box>
                {mainImage && <Img {...mainImage} fluid={mainImage.fluid} />}
              </Box>
              <Box my={3}>
                <Flex flexWrap='wrap'>
                  {edges.length > 0
                    ? edges.map(({ node: { image } }, i) => (
                      <Box
                        width={1 / 3}
                        onClick={() => {
                          setImage(image)
                        }}
                      >
                        <ImgContainer
                          order={i + 1}
                          alt={image.description}
                          style={{
                            objectFit: 'cover',
                            height: '25vh'
                          }}
                          {...image}
                          fluid={image.fluid}
                        />
                      </Box>
                    ))
                    : 'Sorry, no images yet! Please check back later!'}
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Layout>
    </Box>
  )
}

export default gallery

export const query = graphql`
  {
    allContentfulImage {
      edges {
        node {
          image {
            fluid(maxWidth: 1200) {
              ...GatsbyContentfulFluid
            }
            description
          }
          id
        }
      }
    }
  }
`

const ImgContainer = styled(Img)`
  ${props =>
    props.order % 3 !== 0 &&
    css`
      margin-right: 15px;
    `}
`
