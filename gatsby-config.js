module.exports = {
  pathPrefix: '/send-ui',
  siteMetadata: {
    title: 'Firefox Send',
    description: 'UI for Firefox Send',
    repo: 'https://github.com/johngruen'
  },
  plugins: [
    // 'gatsby-plugin-react-helmet',
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'src',
    //     path: `${__dirname}/src/products`,
    //   },
    // }
    // TODO: Gatsby V2 Beta sw.js file terminally breaks site on refresh until you manually unregister the service worker. Leaving this comment as a warning.
    //'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['node-modules'],
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
  ],
};
