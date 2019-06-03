import styled from 'styled-components'
import {
  layout,
  space,
  shadow,
  position,
  color,
  border,
  typography,
  style
} from 'styled-system'
import * as React from 'react'
import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'
import theme from '../theme'

const skew = style({
  prop: 'transform',
  cssProperty: 'transform',
  key: 'skew',
  transformValue: n => {
    return `skewY(-${n}deg)`
  }
})

const StyledBox = styled('div')(
  {
    boxSizing: 'border-box',
    transformOrigin: 0
  },
  space,
  shadow,
  skew,
  layout,
  typography,
  color,
  border,
  position
)

// To recognise propTypes, we have to create new Box to wrap StyledBox
const Box = props => {
  return <StyledBox {...props}>{props.children}</StyledBox>
}

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
  skew: PropTypes.number,
  ...propTypes.space,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.typography,
  ...propTypes.layout,
  ...propTypes.position,
  borderColor: numberStringOrArray,
  boxShadow: numberStringOrArray,
  fontWeight: numberStringOrArray,
  height: numberStringOrArray,
  borderRadius: PropTypes.number
}

export default Box
