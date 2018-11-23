import styled from 'styled-components'

const Fade = styled.div`
opacity: ${props => (props.show ? 1 : 0)};
transition: opacity 750ms ease-out;
`
export default Fade
