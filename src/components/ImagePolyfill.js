import Image from 'gatsby-image'
import React from 'react'

const Img = ({ objFit = `cover`, objPosition = `50% 50%`, ...props }) => (
  <Image
    {...props}
    imgStyle={{
      ...props.imgStyle,
      objectFit: objFit,
      objectPosition: objPosition,
      fontFamily: `"object-fit: ${objFit}; object-position: ${objPosition}"`
    }}
  />
)

export default Img
