import React from "react"
import { Layout, SEO } from "../components/common"
import { HomeBlurb } from "../components/indexPage"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title={`Lucas Engel · Frontend Developer · Toronto, Canada`} />
      <HomeBlurb />
    </Layout>
  )
}

export default IndexPage
