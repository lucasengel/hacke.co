import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { Container } from "./styles"
import Helmet from "gatsby-plugin-react-helmet"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
        }
      }
    }
  `)

  return (
    <Layout>
      <Container>
        {/* <Helmet title={data.site.siteMetadata.title} /> */}
        <p>
          Hi! I'm {data.site.siteMetadata.author}, a passionate multi-skilled IT
          professional that can turn ideas into projects, projects into code,
          and code into real world products.
        </p>
      </Container>
    </Layout>
  )
}

export default IndexPage
