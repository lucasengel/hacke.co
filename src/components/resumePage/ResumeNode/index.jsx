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
        <date>
          {start}
          {end ? ` – ${end}` : ""}
        </date>
      </div>
      {Array.isArray(description) && (
        <ul>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {typeof description === "string" && <p>{description}</p>}
    </Container>
  )
}
