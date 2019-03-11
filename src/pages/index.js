import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import withRoot from "../withRoot"

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20,
  },
})

const IndexPage = () => (
  <Layout>
    <SEO
      title="Course and Credit Calculator"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <Typography variant="h3" gutterBottom>
      Getting Started,
    </Typography>
    <p>
      This application will help you calculate the credits and courses still
      required to graduate. This is based on the classes that you have currently
      passed.
    </p>
    <Link to="/calc/">Start Course Calculator</Link>
  </Layout>
)

export default withRoot(withStyles(styles)(IndexPage))
