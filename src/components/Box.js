import styled from 'styled-components'
import {
  space,
  width,
  height,
  color,
  fontSize,
  fontWeight,
  borders,
  borderColor,
  borderRadius,
  maxWidth,
  minHeight,
  minWidth,
  size,
  position,
  top,
  right,
  bottom,
  left,
  zIndex,
  style
} from 'styled-system'
import * as React from 'react'
import PropTypes from 'prop-types'
import theme from '../theme'

const transform = style({
  prop: 'transform',
  cssProperty: 'transform',
  key: 'rotation',
  transformValue: n => {
    return `rotate(${n}deg)`
  },
  // add a fallback scale object or array, if theme is not present
  scale: [45, 90, 120, 150]
})

const skew = style({
  prop: 'transform',
  cssProperty: 'transform',
  key: 'skew',
  transformValue: n => {
    return `skewY(-${n}deg)`
  },
  // add a fallback scale object or array, if theme is not present
  scale: [10, 20, 30, 40, 50, 60, 70, 80]
})

const boxShadow = style({
  prop: 'boxShadow',
  cssProperty: 'boxShadow',
  key: 'boxShadow'
})
/*
const boxShadow = props => ({
  boxShadow: `${props.theme.boxShadow[props.boxShadow]}`
}) */

const StyledBox = styled.div`
  transform-origin: 0;
  ${boxShadow} ${borders} ${space} ${size} ${maxWidth} ${minWidth} ${minHeight} ${transform} ${skew} ${width} ${height} ${fontWeight} ${fontSize} ${color} ${borderRadius} ${position} ${top} ${bottom} ${left} ${right} ${zIndex} ${borderColor};
`

// To recognise propTypes, we have to create new Box to wrap StyledBox
const Box = ({ children, ...props }) => (
  <StyledBox {...props}>{children}</StyledBox>
)

Box.displayName = 'Box'

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Box.defaultProps = {
  theme: theme
}

Box.propTypes = {
  ...transform.propTypes,
  skew: PropTypes.number,
  ...space.PropTypes,
  ...borders.PropTypes,
  ...color.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...size.propTypes,
  ...position.propTypes,
  borderColor: numberStringOrArray,
  boxShadow: numberStringOrArray,
  fontWeight: numberStringOrArray,
  height: numberStringOrArray,
  borderRadius: PropTypes.number
}

export default Box
