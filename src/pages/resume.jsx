import React from "react"
import { Layout, SEO } from "../components/common"
import {
  ResumeContainer,
  ResumeAside,
  ResumeBody,
} from "../components/resumePage"
import { experience, education, skills } from "../config/resume-experiences"
import { profile } from "../config/resume-profile"

const Resume = () => {
  return (
    <Layout>
      <SEO title={`Resume`} />
      <ResumeContainer>
        <ResumeAside profile={profile} />
        <ResumeBody
          experience={experience}
          education={education}
          skills={skills}
        />
      </ResumeContainer>
    </Layout>
  )
}

export default Resume
