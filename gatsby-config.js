module.exports = {
    siteMetadata:{
        author: 'Jan Delmar'
    },
    plugins: [
        'gatsby-plugin-netlify-cms',
        'gatsby-transformer-yaml',
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'content',
                path: `${__dirname}/content/`
            },
        }
    ]
}
