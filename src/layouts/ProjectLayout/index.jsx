import { graphql } from "gatsby"
import React from "react"

import { Layout, SEO } from "../../components/common"
import { Container } from "./styles"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        slug
      }
      html
    }
  }
`

const Projects = ({ data }) => {
  console.log(data)
  // const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      {/* <SEO title={frontmatter.title} description={frontmatter.description} />
      <Container>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </Container> */}
    </Layout>
  )
}

export default Projects
