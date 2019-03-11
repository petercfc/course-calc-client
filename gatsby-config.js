module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "prisma",
        // This is field under which it's accessible
        fieldName: "prisma",
        // Url to query from
        url: "https://api.cagefreeclimbing.com/"
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Course Credit Calc",
        short_name: "CCC",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-material-ui",
      options: {
        pathToTheme: "src/utils/theme.js"
      }
    }
  ],
  siteMetadata: {
    title: "Course Credit Calculator"
  }
};
