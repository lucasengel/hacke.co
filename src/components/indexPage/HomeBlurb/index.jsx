import { useStaticQuery, graphql } from "gatsby"
import React from "react"

export const HomeBlurb = () => {
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
    <>
      <img src="/lucas-engel.jpg" alt="Lucas Engel" />
      <p>
        <span>Hi! I'm {data.site.siteMetadata.author},</span> a passionate
        multi-skilled IT professional that can turn ideas into projects,
        projects into code, and code into real world products.
      </p>
    </>
  )
}
