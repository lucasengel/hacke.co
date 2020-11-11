import React from "react"
import { Container } from "./styles"

export const ResumeNode = ({ title, start, end, institution, description }) => {
  return (
    <Container>
      <div>
        <div>
          <h3>{title}</h3>
          <small>{institution}</small>
        </div>
        <span>
          {start}
          {end ? ` – ${end}` : ""}
        </span>
      </div>
      <ul>
        {Array.isArray(description) &&
          description.map((item, index) => <li key={index}>{item}</li>)}
        {typeof description === "string" && <p>description</p>}
      </ul>
    </Container>
  )
}
