import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCoffee,
  faAngellist,
  faCube,
  faGithub,
} from "@fortawesome/free-solid-svg-icons"
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
        <h3>Links</h3>
        <p>
          <FontAwesomeIcon icon={faCoffee} />

          <p class="lead socials">
            <FontAwesomeIcon
              href="https://angel.co/karllorey"
              target="_blank"
              icon={faAngellist} //"fab fa-angellist"
            />
            <FontAwesomeIcon
              href="https://www.crunchbase.com/person/karl-lorey"
              target="_blank"
              icon={faCube} //<i class="fas fa-cube"></i>
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              href="https://github.com/lorey"
              target="_blank"
              icon={faGithub}
            ></FontAwesomeIcon>
            <FontAwesomeIcon href="https://gitlab.com/lorey" target="_blank">
              <i class="fab fa-gitlab"></i>
            </FontAwesomeIcon>
            <FontAwesomeIcon
              href="https://www.goodreads.com/karllorey"
              target="_blank"
            >
              <i class="fab fa-goodreads"></i>
            </FontAwesomeIcon>
            <FontAwesomeIcon
              href="https://www.instagram.com/karllorey"
              target="_blank"
            >
              <i class="fab fa-instagram"></i>
            </FontAwesomeIcon>
            <FontAwesomeIcon
              href="https://www.linkedin.com/in/karllorey"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i>
            </FontAwesomeIcon>
            <FontAwesomeIcon
              href="https://medium.com/@karllorey"
              target="_blank"
            >
              <i class="fab fa-medium"></i>
            </FontAwesomeIcon>
            <FontAwesomeIcon
              href="https://www.meetup.com/members/196097665/"
              target="_blank"
            >
              <i class="fab fa-meetup"></i>
            </FontAwesomeIcon>
            <FontAwesomeIcon
              href="https://www.producthunt.com/@karllorey"
              target="_blank"
            >
              <i class="fab fa-product-hunt"></i>
            </FontAwesomeIcon>
            <FontAwesomeIcon
              href="https://www.researchgate.net/profile/Karl_Lorey"
              target="_blank"
            >
              <i class="fab fa-researchgate"></i>
            </FontAwesomeIcon>
            <FontAwesomeIcon
              href="https://twitter.com/karllorey"
              target="_blank"
            >
              <i class="fab fa-twitter"></i>
            </FontAwesomeIcon>
          </p>
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
