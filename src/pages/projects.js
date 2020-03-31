import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import arclemockup from "../images/ArcleMockup.png"

import cookupThum from "../images/cookupThum.png"

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
  box-shadow: 0px 2px 10px #a9c9cc;
  border-radius: 2rem;
  max-width: 50rem;
  max-height: 50rem;
  padding: 2rem;
  margin: 3rem 0;
`

//console.log(typeof window !== "undefined" && window)

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
            </a>{" "}
            and is similar to the product{" "}
            <a href="https://rossum.ai/product/">rossum.ai/</a>
          </p>

          <div>
            <iframe
              width={
                typeof window !== "undefined"
                  ? `${
                      window.innerWidth < 730 ? window.innerWidth * 0.7 : 705
                    }px`
                  : "560px"
              }
              height={
                typeof window !== "undefined"
                  ? `${
                      (window.innerWidth < 730
                        ? window.innerWidth * 0.7
                        : 705) * 0.57
                    }px`
                  : "315px"
              }
              title="Data-extraction-AI"
              src="https://www.youtube.com/embed/AFL-l952I5E"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullscreen
            ></iframe>
          </div>
        </ProjectCard>
        <ProjectCard>
          <h2>
            Repio - A simple spaced repetition app to help you remember to learn
          </h2>
          <p>
            The most simple spaced repetition App you have ever seen. Completely
            detached from the lessons, notes, videos and other forms of
            knowledge you want to learn. More about the application on{" "}
            <a href="https://repio.app">repio.app</a>.
          </p>
          <div>
            <iframe
              width={
                typeof window !== "undefined"
                  ? `${
                      window.innerWidth < 730 ? window.innerWidth * 0.7 : 705
                    }px`
                  : "315px"
              }
              height={
                typeof window !== "undefined"
                  ? `${
                      (window.innerWidth < 730
                        ? window.innerWidth * 0.7
                        : 705) * 0.57
                    }px`
                  : "560px"
              }
              title="Repio.app"
              src="https://www.youtube.com/embed/lfoa3N4uVyc"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullscreen
            ></iframe>
          </div>
        </ProjectCard>
        <ProjectCard>
          <h2>Arcle - Social Bookmarking for great Articles</h2>
          <p>
            This application is still in development and tries to improve the
            experience of finding great articles to read. A mockup of the open
            chrome extension is displayed below.
          </p>
          <img src={arclemockup} />
        </ProjectCard>
        <ProjectCard>
          <h2>Coocup Concept</h2>
          <p>
            The idea of this product was to bulid the AirBnb of Food. However,
            it turned out that there are some{" "}
            <a href="https://www.quora.com/Why-hasnt-Airbnb-for-food-taken-off">
              factors
            </a>{" "}
            that minimize the potential for this type of venture. The
            click-dummy can be tried
            <a href="https://xd.adobe.com/view/b4c7869d-cd5e-4bf0-4889-77546cee56ea-c2f6/?fullscreen">
              here
            </a>
          </p>
          <Link to="/cookup">
            {" "}
            <img src={cookupThum} />
          </Link>
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
