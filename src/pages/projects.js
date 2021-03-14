import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 24px 16px;
  @media (max-width: 400px) {
    padding: 0px;
  }
`

const ProjectCard = styled.div`
  box-shadow: 0px 2px 10px #a9c9cc;
  border-radius: 1.5rem;
  max-width: 50rem;
  max-height: 50rem;
  padding: 32px;
  margin: 3rem 0;

  :hover {
    box-shadow: 0px 5px 20px #a9c9cc;
    transition: all 0.2s ease-out;
  }

  img {
    border-radius: 5px;
  }
`

//console.log(typeof window !== "undefined" && window)

let iframeWidth = () =>
  typeof window !== "undefined"
    ? `${
        window.innerWidth < 400
          ? window.innerWidth - 2 * 32 - 2 * 16
          : window.innerWidth < 860
          ? window.innerWidth - 2 * 32 - 4 * 16
          : 735
      }px`
    : "560px"

let iframeHeight = () =>
  typeof window !== "undefined"
    ? `${(window.innerWidth < 860 ? window.innerWidth * 0.7 : 705) * 0.59}px`
    : "315px"

const IndexPage = () => {
  if (typeof window !== "undefined") {
    window.addEventListener("resize", function () {
      console.log("reszising with", window.innerWidth, window.innerHeight)
      iframeWidth()
      iframeHeight()
    })
  }

  const data = useStaticQuery(
    graphql`
      query ImagesProjects {
        imageCookup: file(relativePath: { eq: "cookupThum.png" }) {
          id
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth: 900, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imagefocuscam: file(relativePath: { eq: "focuscam.png" }) {
          id
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth: 900, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageStudyJourney: file(relativePath: { eq: "studyJourney.png" }) {
          id
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth: 900, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageLibrary: file(relativePath: { eq: "learningLibrary.png" }) {
          id
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth: 900, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  console.log(data)

  return (
    <Layout>
      <SEO title="Projects" keywords={[`projects`, `MERN`, `react`]} />
      <Content>
        <h1>Projects</h1>
        <ProjectCard>
          <h2>RemNote</h2>
          <p>
            <a href="https://www.remnote.io">RemNote.io</a> is Your Thinking and
            Learning Workspace. Our vision is to reinvent how people learn,
            think, and collaborate. I'm a Co-Founder of RemNote.
          </p>

          <iframe
            width={iframeWidth()}
            height={iframeHeight()}
            title="RemNote - The Note-taking App EVERY Student Needs. NOW."
            src="https://www.youtube.com/embed/M2U61vHfQSQ"
            frameborder="1"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen
          ></iframe>
        </ProjectCard>
        <ProjectCard>
          <h2>FocusCam</h2>
          <p>
            <a href="https://focuscam.app">FocusCam.app</a> is a web app that
            helps you improve your focus using computer vision.
          </p>
          <div>
            <Link to="https://focuscam.app/">
              {" "}
              <Img fluid={data.imagefocuscam.childImageSharp.fluid} />
            </Link>
          </div>
        </ProjectCard>
        <ProjectCard>
          <h2>Study Journey</h2>
          <p>
            The personalized curriculum planner for the digital age. I'm
            currently less involved in the project.
          </p>
          <div>
            <Link to="https://studyjourney.de/about">
              {" "}
              <Img fluid={data.imageStudyJourney.childImageSharp.fluid} />
            </Link>
          </div>
        </ProjectCard>
        <ProjectCard>
          <h2>Learning Library</h2>
          <p>
            A crowdsources library with links to resources about:
            Learning-Psychology, Note-Taking, Spaced Repetition, Memory, Visual
            Learning, Machine Learning, Attention, Creative thinking, Mental
            Models, Knowledge Representation, Reading, Connected Thought,
            Edtech, Learning-journey, and more.
          </p>
          <div>
            <Link to="https://www.notion.so/Learning-Library-2ecb646b5e1e4d5c8274c73c3fbb2541">
              {" "}
              <Img fluid={data.imageLibrary.childImageSharp.fluid} />
            </Link>
          </div>
        </ProjectCard>
        <ProjectCard>
          <h2>Extractly - Document Data Extraction AI Dashboard</h2>
          <p>
            I build a Dashboard for a Data-extraction-AI with React-Typescript
            which is similar to{" "}
            <a href="https://rossum.ai/product/">rossum.ai</a>. This AI was
            originally developed for{" "}
            <a href="https://www.rechnung.de/">Rechnung.de</a>. More about the
            project can be found on{" "}
            <a href="https://markov-solutions.com/datenextraktion">
              markov-solutions.com.
            </a>{" "}
            The demo can be tried{" "}
            <a href="https://dashboard.markov-solutions.com/">here</a>.
          </p>
          <div>
            <iframe
              width={iframeWidth()}
              height={iframeHeight()}
              title="Data-extraction-AI"
              src="https://www.youtube.com/embed/AFL-l952I5E"
              frameborder="1"
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
            The most simple spaced repetition app you have ever seen. Completely
            detached from the lessons, notes, videos and other forms of
            knowledge you want to learn. More about the application on{" "}
            <a href="https://repio.app">repio.app</a>.
          </p>
          <div>
            <iframe
              width={iframeWidth()}
              height={iframeHeight()}
              title="Repio.app"
              src="https://www.youtube.com/embed/lfoa3N4uVyc"
              frameborder="1"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullscreen
            ></iframe>
          </div>
        </ProjectCard>
        {/*  <ProjectCard>
          <h2>Arcle - Social Bookmarking for great Articles</h2>
          <p>
            This application is still in development and tries to improve the
            experience of finding great articles to read. A mockup of the open
            chrome extension is displayed below.
          </p>
          <img src={arclemockup} />
        </ProjectCard> */}
        <ProjectCard>
          <h2>Coocup Concept</h2>
          <p>
            The idea of this product was to bulid the AirBnb of Food. However,
            it turned out that there are some{" "}
            <a href="https://www.quora.com/Why-hasnt-Airbnb-for-food-taken-off">
              factors
            </a>{" "}
            that minimize the potential for this type of venture. The
            click-dummy can be tried{" "}
            <a href="https://xd.adobe.com/view/b4c7869d-cd5e-4bf0-4889-77546cee56ea-c2f6/?fullscreen">
              here
            </a>
          </p>
          <Link to="/cookup">
            {" "}
            <Img fluid={data.imageCookup.childImageSharp.fluid} />
          </Link>
        </ProjectCard>
      </Content>
    </Layout>
  )
}

export default IndexPage
