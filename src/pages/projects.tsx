import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { Container } from "./styles"

function ProjectsPage() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              description
              slug
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Container>
        <h1>Projects</h1>
        <p>Posts will show up here</p>
        <ul>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            const { title, description, slug } = node.frontmatter

            return (
              <li>
                <Link to={`/projects/${slug}`}>{title}</Link>
                <p>{description}</p>
              </li>
            )
          })}
        </ul>
      </Container>
    </Layout>
  )
}

export default ProjectsPage
