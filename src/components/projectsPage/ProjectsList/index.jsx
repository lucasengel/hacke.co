import React from "react"
import { Container } from "./styles"
import { ProjectsListItem } from "../"

export const ProjectsList = ({ projects }) => {
  console.log("ProjectsListItem", ProjectsListItem)

  return (
    <Container>
      <h1>Projects</h1>
      <ul>
        {projects
          .sort((a, b) => {
            return a.order > b.order ? 1 : -1
          })
          .map(project => (
            <ProjectsListItem key={project.title} project={project} />
          ))}
      </ul>
    </Container>
  )
}
