import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"
import { Container } from "./styles"

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
    <Container>
      <div>
        <p>
          <span>Hi! I'm {data.site.siteMetadata.author},</span> I'm a Frontend
          developer based in Toronto, Canada.
        </p>
        <p>
          Currently open to opportunities. Feel free to check my{" "}
          <Link to="project">projects</Link> and my{" "}
          <Link to="resume">resume</Link>.
        </p>
      </div>
      <div className="frame">
        <img src="/lucas-engel.jpg" alt="Lucas Engel" />
      </div>
    </Container>
  )
}
