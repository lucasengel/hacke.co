import React from "react"
import { Layout, SEO } from "../components/common"
import { ProjectsContainer } from "../components/projectsPage"

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title={`Projects`} />
      <ProjectsContainer />
    </Layout>
  )
}

export default ProjectsPage
