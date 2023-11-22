module.exports = {
  siteMetadata: {
    siteUrl: `vaultstaking.com`
  },
  plugins: ["gatsby-plugin-sass", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "1111111"
    }
  }, "gatsby-plugin-sharp", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-transformer-sharp", `gatsby-plugin-image`, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }]
};