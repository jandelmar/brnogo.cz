module.exports = {
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-transformer-yaml',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'jidlo',
        path: `${__dirname}/content/jidlo/`
      },
    },
    {
    resolve: 'gatsby-source-filesystem',
    options: {
        name: 'napoje',
        path: `${__dirname}/content/napoje/`
    },
    }
  ],
};
