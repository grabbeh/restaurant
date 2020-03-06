import styled from 'styled-components'
import {
  space,
  border,
  color,
  typography,
  position,
  layout
} from 'styled-system'
import * as React from 'react'
import PropTypes from 'prop-types'
import theme from '../theme'

const StyledButton = styled('button')(
  {
    outline: '1px solid transparent',
    cursor: 'pointer',
    boxShadow: '-5px 5px 0px 0px rgba(0,0,0,1)'
  },
  color,
  typography,
  space,
  border,
  position,
  layout
)

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
)

Button.displayName = 'Box'

Button.defaultProps = {
  borderRadius: 1,
  theme: theme,
  bg: 'go-orange',
  px: 10,
  py: 12,
  borderLeft: '2px solid',
  borderRight: '2px solid',
  borderBottom: '2px solid',
  borderTop: '2px solid',
  borderColor: 'black',
  fontSize: 1,
  fontWeight: 'bold',
  color: 'white',
  width: 130,
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
