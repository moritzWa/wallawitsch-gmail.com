import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query Images {
        image: file(relativePath: { eq: "cookup.png" }) {
          id
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth: 3080, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  console.log(data)

  return (
    <>
      <SEO title="Cookup" eywords={[`projects`, `MERN`, `react`]} />
      <a href="https://xd.adobe.com/view/b4c7869d-cd5e-4bf0-4889-77546cee56ea-c2f6/?fullscreen">
        {/* <img src={cookup} /> */}
        <Img fluid={data.image.childImageSharp.fluid} />
      </a>
    </>
  )
}

export default IndexPage
