import React, { Component } from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'
import Menu from '../components/Menu'
import Grow from '../components/Grow'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showMenu: false
    }
  }

  open = () => {
    this.setState({ showMenu: true })
  }

  close = () => {
    this.setState({ showMenu: false })
  }

  render () {
    const { activePath } = this.props
    const { showMenu } = this.state
    const { open, close } = this
    return (
      <div className='bg-gold z-5 relative pr3'>
        <Grow show={showMenu}>
          <Menu showMenu={showMenu} close={close} />
        </Grow>
        <div className={cn('bg-gold cf w-100 f4 z-4')}>
          {showMenu
            ? <div onClick={close} className='dn-ns'>
              <div className='pointer dark-gray fr mt3 mr2'>
                  Close
                </div>
            </div>
            : <div onClick={open} className='dn-ns'>
              <div className='pointer dark-gray fr mt3 mr2'>
                  Options
                </div>
            </div>}
          <div className=' mt3 f4 dn dib-ns fr'>
            <Link
              style={{ outline: 0 }}
              className={cn(
                activePath === '/menu' && 'b',
                'dark-gray',
                'hover-black',
                'fr',
                'link'
              )}
              to='/menu'
            >
              Menu
            </Link>
            <Link
              style={{ outline: 0 }}
              className={cn(
                activePath === '/' && 'b',
                'dark-gray',
                'hover-black',
                'fr',
                'link',
                'mr4'
              )}
              to='/'
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
