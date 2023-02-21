import ResumeAside from "@/components/ResumeAside/ResumeAside";
import ResumeBody from "@/components/ResumeBody/ResumeBody";
import ResumeContainer from "@/components/ResumeContainer/ResumeContainer";
import { IResume } from "@/types";
import data from "../../config/resume.json";

const Resume: React.FC = () => {
  const { profile, experience, education, skills }: IResume = data;

  return (
    <ResumeContainer>
      <ResumeAside profile={profile} />
      <ResumeBody
        experience={experience}
        education={education}
        skills={skills}
      />
    </ResumeContainer>
  );
};

export default Resume;
