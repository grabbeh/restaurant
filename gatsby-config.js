if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  require('dotenv').config({ path: './config/keys.env' })
}

module.exports = {
  siteMetadata: {
    title: 'Goods Office - friendly neighbourhood cafe/restaurant in Stroud Green',
    navMenuTypes: [
      { link: '/', title: 'HOME' },
      { link: '/menus', title: 'MENUS' },
      { link: '/events', title: 'EVENTS' },
      { link: '/info', title: 'INFO' },
      { link: '/find-us', title: 'FIND US' }
    ]
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-favicon`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.SPACE_ID}`,
        accessToken: `${process.env.ACCESS_TOKEN}`
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Montserrat', 'Montserrat:bold']
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify`
  ]
}
