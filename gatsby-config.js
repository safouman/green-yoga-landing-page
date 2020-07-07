module.exports = {
  siteMetadata: {
    title: `Join The Green Yoga Tribe`,
    description: `Join our Green Yoga Tribe, plant trees and make yoga your lifestyle`,
    author: "Green Yoga",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "301920457857949",
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `green-yoga-join`,
        short_name: `green-yoga`,
        start_url: `/`,
      },
    },
  
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
