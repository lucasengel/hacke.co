import React from "react"
import { Layout, SEO } from "../components/common"
import { ProjectsList } from "../components/projectsPage"
import { graphql, useStaticQuery } from "gatsby"

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              order
              title
              description
              repo
              image
            }
            html
          }
        }
      }
    }
  `)

  const { edges } = data.allMarkdownRemark

  const projects = edges.map(({ node, html }) => {
    return {
      ...node.frontmatter,
      html,
    }
  })

  return (
    <Layout>
      <SEO
        title={`Projects · Lucas Engel · Frontend Developer · Toronto, Canada`}
      />
      <ProjectsList projects={projects} />
    </Layout>
  )
}

export default Projects
