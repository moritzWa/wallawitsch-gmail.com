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
      <Content>
        <h1>Summary: Competing in The Age Of AI: Strategy and Leadership</h1>
        <p>
          This is a bullet style summary of the book 'Competing in the Age of
          AI: Strategy and Leadership When Algorithms and Networks Run the
          World' by Marco Iansiti and Karim R. Lakhani. You can read it{" "}
          <a href="https://www.remnote.io/a/competing-in-the-age-of-ai-strategy-and-leadership/602f77f919149600349ecae1">
            here
          </a>
          .
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
