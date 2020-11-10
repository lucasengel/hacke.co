import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

export const ProjectsContainer = () => {
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
    <div>
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
    </div>
  )
}
