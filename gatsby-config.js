module.exports = {
  pathPrefix: "/team-health",
  siteMetadata: {
    title: `Stuff n Things`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Heather Anderson`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    { // todo: how to avoid listing individually here
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `questionone`,
        path: `${__dirname}/src/data/questions/one`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `questiontwo`,
        path: `${__dirname}/src/data/questions/two`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `questionthree`,
        path: `${__dirname}/src/data/questions/three`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `questionfour`,
        path: `${__dirname}/src/data/questions/four`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `questionfive`,
        path: `${__dirname}/src/data/questions/five`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `questionsix`,
        path: `${__dirname}/src/data/questions/six`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `questionseven`,
        path: `${__dirname}/src/data/questions/seven`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `questioneight`,
        path: `${__dirname}/src/data/questions/eight`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `questionnine`,
        path: `${__dirname}/src/data/questions/nine`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `questionten`,
        path: `${__dirname}/src/data/questions/ten`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `questioneleven`,
        path: `${__dirname}/src/data/questions/eleven`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `questiontwelve`,
        path: `${__dirname}/src/data/questions/twelve`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `questionthirteen`,
        path: `${__dirname}/src/data/questions/thirteen`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `questionfourteen`,
        path: `${__dirname}/src/data/questions/fourteen`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `questionfifteen`,
        path: `${__dirname}/src/data/questions/fifteen`,
      },
    },
    {
      resolve: `gatsby-transformer-csv`,
      options: {
        noheader: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
