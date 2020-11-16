import React from "react"
// import { graphql } from "gatsby"

// import { Layout, SEO } from "../../components/common"
// import { Container } from "./styles"

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         description
//         slug
//         image {
//           relativePath
//         }
//       }
//       html
//     }
//   }
// `

const Projects = ({ data }) => {
  // const { frontmatter, html } = data.markdownRemark

  return (
    <h1>h1</h1>
    // <Layout>
    //   <SEO title={frontmatter.title} description={frontmatter.description} />
    //   <Container>
    //     <img
    //       src={`/images/${frontmatter.image.relativePath}`}
    //       alt={frontmatter.title}
    //     />
    //     <div dangerouslySetInnerHTML={{ __html: html }}></div>
    //   </Container>
    // </Layout>
  )
}

export default Projects
