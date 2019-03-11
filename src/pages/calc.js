import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Calculator" />
      <h3>Lets Go!</h3>
      <p>{data.api.routeCollection.items[1].name}</p>
      <Link to="/">Start Over</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    api {
      routeCollection {
        items {
          name
        }
      }
    }
  }
`
