import styled from 'styled-components'

const Grow = styled.div.attrs({
  className: 'z-5 bg-gold fixed mt5 right-0'
})`
opacity: ${props => (props.show ? 1 : 0)}
width: ${props => (props.show ? '100%' : 0)};
height: ${props => (props.show ? '100%' : 0)};
transition: opacity 400ms, height 400ms, width 400ms ease-in;

`
export default Grow
