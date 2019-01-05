module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/styles/typography.js',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'jidlo',
        path: `${__dirname}/src/content/jidlo/`
      },
    },
    {
    resolve: 'gatsby-source-filesystem',
    options: {
        name: 'napoje',
        path: `${__dirname}/src/content/napoje/`
    },
    }
  ],
};
