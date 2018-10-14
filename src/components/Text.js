import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  fontSize,
  space,
  fontWeight,
  color,
  textAlign,
  lineHeight,
  style
} from 'styled-system'
import theme from '../theme'

const skew = style({
  prop: 'transform',
  cssProperty: 'transform',
  key: 'skew',
  transformValue: n => {
    return `skewY(${n}deg)`
  },
  // add a fallback scale object or array, if theme is not present
  scale: [10, 20, 30, 40, 50, 60, 70, 80]
})

const StyledText = styled.div`
transform-origin: 0;
  ${space} ${fontSize} ${fontWeight} ${color} ${textAlign} ${lineHeight} ${skew};
`

const Text = ({ children, ...props }) => (
  <StyledText {...props}>{children}</StyledText>
)

Text.displayName = 'Text'

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Text.propTypes = {
  ...space.propTypes,
  /** Font size */
  fontSize: numberStringOrArray,
  /** Alignment */
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  /** Font weight */
  fontWeight: PropTypes.string,
  /** Color */
  color: PropTypes.string
}

Text.defaultProps = {
  theme: theme
}

export default Text
