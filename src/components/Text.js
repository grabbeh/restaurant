import styled from 'styled-components'
import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'
import { space, color, typography } from 'styled-system'
import theme from '../theme'

export const caps = props =>
  props.caps
    ? {
      textTransform: 'uppercase'
    }
    : null

const Text = styled('div')(typography, space, color, caps)

Text.displayName = 'Text'

Text.propTypes = {
  ...propTypes.space,
  ...propTypes.typography,
  color: PropTypes.string
}

Text.defaultProps = {
  theme,
  color: 'petrol'
}

Text.span = Text.withComponent('span')
Text.p = Text.withComponent('p')
Text.s = Text.withComponent('s')

export default Text
