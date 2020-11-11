import React from "react"
import { Helmet } from "react-helmet"

import { Header, Footer } from "../"
import GlobalStyles from "../GlobalStyles"
import { Container, Main } from "./styles"

export const Layout = ({ children }) => {
  return (
    <Container>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KK74JP"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        ></iframe>
      </noscript>
      <GlobalStyles />
      <Helmet>
        <link rel="icon" href="hacke.svg" type="image/svg+xml" />
        <link
          href="https://fonts.googleapis.com/css2??family=Lato:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}
