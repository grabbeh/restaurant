import React from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'

const Footer = ({ creative, activePath }) => (
  <div>
    <div className='mv4 tracked lato w-80 center f6 flex flex-wrap justify-center'>
      <div className='tc mr3 heavy pv2'>
        <Link
          style={{ outline: 0}}
          className={cn(
            activePath === '/' && 'dark-gray',
            activePath !== '/' && 'gray',
            'hover-black',
            'ttu',
            'link'
          )}
          to='/'
        >
          ALL
        </Link>
      </div>
      {creative.map(c => (
        <div className='tc mr3 heavy pv2' key={c.title}>
          <Link
            style={{ outline: 0}}
            className={cn(
              activePath === c.path && 'dark-gray',
              activePath !== c.path && 'gray',
              'hover-black',
              'ttu',
              'link'
            )}
            to={c.path}
          >
            {c.title}
          </Link>
        </div>
      ))}
    </div>

  </div>
)

export default Footer
