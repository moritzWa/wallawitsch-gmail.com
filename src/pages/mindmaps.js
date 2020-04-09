import React, { useEffect, useState } from "react"

import { Link, graphql } from "gatsby"
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
  return (
    <Layout>
      <SEO title="Projects" eywords={[`projects`, `MERN`, `react`]} />
      <Content>
        <h1>Mindmaps</h1>
        <p>
          In the last years I've listened to{" "}
          <a
            target="_blank"
            href="https://www.goodreads.com/moritzw"
            target="_blank"
          >
            many book
          </a>{" "}
          and podcast and used xmind to create notes. Here is a collection of
          some of those accumulations.
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
