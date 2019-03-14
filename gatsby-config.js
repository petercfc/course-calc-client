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
