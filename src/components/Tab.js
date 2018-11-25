import React, { Component } from 'react'
import Box from '../components/Box'
import Text from '../components/Text'
import styled, { css } from 'styled-components'

class Tab extends Component {
  render () {
    const { isDisabled, onSelect } = this.props
    return (
      <StyledTab
        pb={1}
        mr={3}
        {...this.props}
        onClick={isDisabled ? null : onSelect}
      >
        <Text color='black'>{this.props.children}</Text>
      </StyledTab>
    )
  }
}

export default Tab

const StyledTab = styled(Box)`
cursor: pointer;
${props => props.isActive && css`
  font-weight: bold;
  border-bottom: 2px solid red;
  border-bottom-color: 'red';
`}
`
