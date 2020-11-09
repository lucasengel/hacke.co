import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import SEO from "../seo"
import GlobalStyles from "../../globalStyles"
import { Container } from "./styles"
import { Helmet } from "react-helmet"

function Layout({ children }) {
  return (
    <Container>
      <GlobalStyles />
      <SEO title={`Home`} />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2??family=Lato:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
