import React from "react"
import { Layout, SEO } from "../components/common"
import { ProjectsContainer } from "../components/projectsPage"

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO
        title={`Projects · Lucas Engel · Frontend Developer · Toronto, Canada`}
      />
      <ProjectsContainer />
    </Layout>
  )
}

export default ProjectsPage
