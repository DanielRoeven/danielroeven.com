module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: ['gatsby-plugin-react-helmet',
            'gatsby-plugin-styled-components',
            {
              resolve: `gatsby-source-filesystem`,
              options: {
                path: `${__dirname}/src/markdown-files/`,
            		  name: "ar-show-design-app.md",
              }
            },
            `gatsby-transformer-remark`,
            `gatsby-plugin-sharp`,
            {
              resolve: `gatsby-transformer-remark`,
              options: {
                plugins: [
                  {
                    resolve: `gatsby-remark-images`,
                    options: {
                      // It's important to specify the maxWidth (in pixels) of
                      // the content container as this plugin uses this as the
                      // base for generating different widths of each image.
                      maxWidth: 1800,
                      linkImagesToOriginal: false,
                      quality: 100,
                    },
                  },
                ],
              },
            },
          ],
}
