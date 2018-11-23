import styled from 'styled-components'
import {
  space,
  width,
  color,
  fontWeight,
  fontSize,
  borderRadius,
  borders,
  borderBottom,
  borderLeft,
  borderTop,
  borderRight,
  borderColor
} from 'styled-system'
import * as React from 'react'
import posed from 'react-pose'
import PropTypes from 'prop-types'
import theme from '../theme'

const StyledButton = styled(
  posed.button({
    pressable: true,
    hoverable: true,
    init: {
      y: 0,
      x: 0,
      boxShadow: '-5px 5px 0px 0px rgba(0,0,0,1)'
    },
    hover: {
      y: -2,
      boxShadow: '-5px 5px 0px 0px rgba(0,0,0,1)'
    },
    press: { boxShadow: '-0px 0px 0px 0px rgba(0,0,0,1)', y: 2, x: -2 }
  })
)`
  outline: 1px solid transparent;
  cursor: pointer;
  ${space} ${width} ${fontSize} ${color} ${fontWeight} ${borderRadius} ${borders}   ${borders}
  ${borderBottom}
  ${borderTop}
  ${borderLeft}
  ${borderRight}
  ${borderColor}
`

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
)

Button.displayName = 'Box'

Button.defaultProps = {
  theme: theme,
  bg: 'go-orange',
  px: 3,
  py: 2,
  borderLeft: '1px solid',
  borderRight: '1px solid',
  borderBottom: '1px solid',
  borderTop: '1px solid',
  borderColor: 'black',
  fontSize: 1,
  color: 'white',
  disabled: false
}

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Button.propTypes = {
  fontSize: numberStringOrArray,
  fontWeight: PropTypes.string,
  color: PropTypes.string,
  bg: PropTypes.string,
  width: numberStringOrArray,
  m: numberStringOrArray,
  mt: numberStringOrArray,
  mr: numberStringOrArray,
  mb: numberStringOrArray,
  ml: numberStringOrArray,
  mx: numberStringOrArray,
  my: numberStringOrArray,
  p: numberStringOrArray,
  pt: numberStringOrArray,
  pr: numberStringOrArray,
  pb: numberStringOrArray,
  pl: numberStringOrArray,
  px: numberStringOrArray,
  py: numberStringOrArray,
  borderRadius: PropTypes.number
}

export default Button
