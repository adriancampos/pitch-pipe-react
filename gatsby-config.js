module.exports = {
  siteMetadata: {
    title: `Pitch, Please?`,
    description: `A pitch pipe.`,
    author: `@adriancampos`,
  },
  pathPrefix: "/pitch-please",
  plugins: [
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
        name: `Pitch Pipe`,
        short_name: `PitchPipe`,
        start_url: `/`,
        background_color: `#3b0215`,
        theme_color: `#3b0215`,
        display: `minimal-ui`,
        icon: `src/images/pitchpipe-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
