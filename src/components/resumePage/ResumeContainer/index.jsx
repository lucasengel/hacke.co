import React from "react"
import { Container } from "./styles"

export const ResumeContainer = ({ children }) => {
  return (
    <div>
      <h1>Resume</h1>
      <Container>{children}</Container>
    </div>
  )
}
