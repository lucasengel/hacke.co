import React from "react"
import { Layout, SEO } from "../components/common"
import ResumePage from "../components/resumePage"

function Resume() {
  return (
    <Layout>
      <SEO title={`Resume`} />
      <ResumePage />
    </Layout>
  )
}

export default Resume
