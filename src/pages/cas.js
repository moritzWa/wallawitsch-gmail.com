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
  window.location = "https://moritz.digital/blog/cas"

  return (
    <Layout>
      <SEO title="Projects" eywords={[`projects`, `MERN`, `react`]} />
      <Content>
        <h1>Cognition Augmantation Software</h1>
        <p>
          This article aims to create a more precise terminology and to give an
          overview of the progress and state of Cognition Augmentation Software.
          The original RemNote article can be viewed{" "}
          <a href="https://www.remnote.io/a/cognition-augmentation-software-v1/601b10bbc39b680034b2d17a">
            here
          </a>
          . You can also read the whole Essay on my blog{" "}
          <a href="https://moritz.digital/blog/cas">here</a>.
        </p>
      </Content>
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
