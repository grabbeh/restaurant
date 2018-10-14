import React from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'

const Menu = ({ showMenu, close }) => {
  return (
    <div className={cn(!showMenu && 'dn')}>
      <div className='f3 mt5 tc'>
        <div onClick={close}>
          <Link
            className='tracked hover-black dark-gray lato ttu link'
            to='/menu'
          >
            Menu
          </Link>
        </div>
        <div className='mt3' onClick={close}>
          <Link className='tracked hover-black dark-gray lato ttu link' to='/'>
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Menu
