import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../theme'

const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

Link.displayName = 'Link'

Link.propTypes = {
  color: PropTypes.string
}

Link.defaultProps = {
  theme: theme
}

export default Link
