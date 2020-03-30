import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const ArticleDate = styled.h5`
  display: inline;
  color: #606060;
`

const MarkerHeader = styled.h3`
  display: inline;
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(255, 250, 150, 0.15),
    rgba(255, 250, 150, 0.8) 100%,
    rgba(255, 250, 150, 0.25)
  );
`

const ReadingTime = styled.h5`
  display: inline;
  color: #606060;
`

const ProjectCard = styled.div`
  box-shadow: 0px 2px 10px grey;
  border-radius: 2rem;
  max-width: 50rem;
  max-height: 50rem;
  padding: 2rem;
  margin: 3rem 0;
`
/* const iframe = styled.iframe`
  border: 4px solid #000;
  -moz-border-radius: 15px;
  border-radius: 15px;
  overflow: hidden;
` */

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  )
}

function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  )
}

console.log("Width:  " + getWidth())
console.log("Height: " + getHeight())

const iframeHeight = `${getHeight() - 20}px`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Projects" eywords={[`projects`, `MERN`, `react`]} />
      <Content>
        <h1>Projects</h1>
        <ProjectCard>
          <h2>Extractly: Document Data Extraction AI Dashboard</h2>
          <p>
            Currently I am building a Dashboard for an Data-extraction-AI with
            React-Typescript. This AI was originally developed for{" "}
            <a href="https://www.rechnung.de/">Rechnung.de</a>. More about the
            project can be found on{" "}
            <a href="https://markov-solutions.com/portfolio/en/">
              markov-solutions.com
            </a>
          </p>
          <div style={{ "--aspect-ratio": "16/9" }}>
            <iframe
              title=""
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Trr5OdJgKwc"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </ProjectCard>
        <ProjectCard>
          <h2>Repio - </h2>
          <p>More abou</p>
          <div style={{ "--aspect-ratio": "16/9" }}>
            <iframe
              title="video 1"
              src="https://www.youtube.com/embed/aAxt0Z7IXIo"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </ProjectCard>
        <ProjectCard>
          <h2>Project Title</h2>
          <p>
            Project destricpion eithasnitat tihenatshi hienatn thiern ahsit
            tiehan iehtna ieht ant iehnatiea snhthsa tniheta snhiteasnthiernsa
            thsnie tasnt
          </p>
          <div style={{ "--aspect-ratio": "16/9" }}>
            <iframe
              title="video 1"
              src="https://www.youtube.com/embed/aAxt0Z7IXIo"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </ProjectCard>
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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            rawDate: date
            path
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`
