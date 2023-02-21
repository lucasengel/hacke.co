import { IResume } from "@/types";
import ResumeNode from "../ResumeNode/ResumeNode";

import "./ResumeBody.scss";

interface ResumeBodyProps {
  experience: IResume["experience"];
  education: IResume["education"];
  skills: IResume["skills"];
}

const ResumeBody: React.FC<ResumeBodyProps> = ({
  experience,
  education,
  skills,
}) => (
  <main className="resume-body">
    {experience && (
      <>
        <h2>Experience</h2>
        {experience.map(
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
      </>
    )}

    {education?.length && (
      <>
        <h2>Education</h2>
        {education.map(
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
      </>
    )}

    {(skills?.languages || skills?.technical) && (
      <>
        <h2>Languages & Skills</h2>
        {skills?.languages && (
          <p>
            <strong>Languages:</strong> {skills.languages.join(", ")}
          </p>
        )}
        {skills?.technical && (
          <p>
            <strong>Skills:</strong> {skills.technical.join(", ")}
          </p>
        )}
      </>
    )}
  </main>
);

export default ResumeBody;
