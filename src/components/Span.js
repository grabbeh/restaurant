import styled from 'styled-components'
import {
  space,
  width,
  height,
  color,
  fontSize,
  fontFamily,
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
  zIndex
} from 'styled-system'
import PropTypes from 'prop-types'
import theme from '../theme'

const Span = styled.span`
 ${borders} ${space} ${size} ${maxWidth} ${minWidth} ${minHeight} ${width} ${height} ${fontWeight} ${fontSize} ${fontFamily} ${color} ${borderRadius} ${position} ${top} ${bottom} ${left} ${right} ${zIndex} ${borderColor};
`

// To recognise propTypes, we have to create new Box to wrap StyledBox

Span.displayName = 'Box'

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Span.defaultProps = {
  theme: theme
}

Span.propTypes = {
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

export default Span
