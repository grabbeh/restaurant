import React from 'react'
import Helmet from 'react-helmet'
import Box from './Box'
import Header from './Header'
import '../index.css'

const Layout = props => {
  return (
    <div>
      <Helmet
        meta={[
          { name: 'description', content: 'Restaurant website' },
          {
            name: 'keywords',
            content: 'Crouch End, Stroud Green, restaurant, london'
          }
        ]}
      />

      <Box>
        <Header activePath={props.location.pathname} />
        {props.children}
      </Box>
    </div>
  )
}

export default Layout
