module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Course Credit Calculator",
        short_name: "CCC",
        start_url: "/",
        background_color: "#009688",
        theme_color: "#009688",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png" // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-offline",
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "prisma",
        // This is field under which it's accessible
        fieldName: "prisma",
        // Url to query from
        url: "https://course-credit-api.herokuapp.com/graphql"
      }
    },
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
