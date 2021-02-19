import React from "react"

import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
  @media (max-width: 400px) {
    padding: 0px;
  }
`

const IndexPage = () => {
  if (typeof window !== "undefined") {
    window.location =
      "https://www.remnote.io/a/competing-in-the-age-of-ai-strategy-and-leadership/602f77f919149600349ecae1"
  }

  return (
    <Layout>
      <SEO title="Projects" eywords={[`projects`, `MERN`, `react`]} />
      <Content></Content>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
