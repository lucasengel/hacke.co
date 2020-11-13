import React from "react"
import { Link } from "gatsby"

import { Container } from "./styles"

export const ProjectsListItem = ({ project }) => {
  const { slug, title, description, repo, image } = project

  return (
    <Container>
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <a href={repo} target="_blank" rel="noreferrer" className="git">
        <img
          src="/github.svg"
          alt={`GitHub repository for ${title}`}
          tiitle={`GitHub repository for ${title}`}
        />
      </a>
    </Container>
  )
}
