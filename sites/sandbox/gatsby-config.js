require('dotenv').config()

const config = {
  brandToken: 'VIO',
  mapiBrandToken: 'VIO',
  siteName: 'sandbox',
  alternateName: 'sandbox.com',
  siteURL: 'https://rc.stage.clear.link/',
  defaultTitleTemplate: '',
  defaultPhone: '5555555555',
  defaultPromoCode: 55555,
}

// The gatsby-plugin-sitemap requires "Url" to be capital case in siteMetadata
module.exports = {
  siteMetadata: { ...config, siteUrl: config.siteURL },
  plugins: [
    {
      resolve: 'gatsby-theme-content-editing-sandbox',
      options: config,
    },
    {
      resolve: '@leshen/gatsby-theme-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        environment: process.env.CONTENTFUL_ENVIRONMENT_ID,
        host: process.env.CONTENTFUL_HOST,
        forceFullSync: true,
      },
    },
    {
      resolve: 'gatsby-source-brandy',
      options: {
        brandToken: config.brandToken,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap_main.xml`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-google-tagmanager',
    //   options: {
    //     id: 'GTM-5DXCDKR',

    //     // Include GTM in development.
    //     // Defaults to false meaning GTM will only be loaded in production.
    //     includeInDevelopment: false,

    //     // datalayer to be set before GTM is loaded
    //     // should be an object or a function that is executed in the browser
    //     // Defaults to null
    //     defaultDataLayer: { platform: 'gatsby' },

    //     // Specify optional GTM environment details.
    //     // gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
    //     // gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
    //     // dataLayerName: 'YOUR_DATA_LAYER_NAME',
    //   },
    // },
  ],
}
