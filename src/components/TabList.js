import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import { Flex } from '../components/Flex'
import Box from '../components/Box'

class TabList extends Component {
  static contextTypes = {
    activeIndex: PropTypes.number.isRequired,
    onSelectTab: PropTypes.func.isRequired
  }
  render () {
    const { activeIndex } = this.context
    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        isActive: index === activeIndex,
        onSelect: () => this.context.onSelectTab(index)
      })
    })
    return (
      <Box pb={3}>
        <Flex flexWrap='wrap'>
          {children}
        </Flex>
      </Box>
    )
  }
}

export default TabList
