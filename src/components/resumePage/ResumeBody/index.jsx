import React from "react"
import { ResumeNode } from "../ResumeNode"
import { Container } from "./styles"

export const ResumeBody = ({ experience, education, skills }) => {
  return (
    <Container>
      {experience && experience && <h2>Experience</h2>}
      {experience &&
        experience &&
        experience.map(
          ({ title, start, end, institution, description }, index) => (
            <ResumeNode
              key={index}
              title={title}
              start={start}
              end={end}
              institution={institution}
              description={description}
            />
          )
        )}

      {education && education.length && <h2>Education</h2>}
      {education &&
        education.length &&
        education.map(
          ({ title, start, end, institution, description }, index) => (
            <ResumeNode
              key={index}
              title={title}
              start={start}
              institution={institution}
              description={description}
            />
          )
        )}

      {skills && skills.languages && <h2>Languages &amp; Skills</h2>}
      {skills && skills.languages && (
        <p>
          <strong>Languages:</strong> {skills.languages.join(", ")}
        </p>
      )}

      {skills && skills.technical && (
        <p>
          <strong>Skills:</strong> {skills.technical.join(", ")}
        </p>
      )}
    </Container>
  )
}
