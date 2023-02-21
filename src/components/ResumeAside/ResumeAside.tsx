import { IResume } from "@/types";
import Image from "next/image";

import "./ResumeAside.scss";

interface ResumeAsideProps {
  profile: IResume["profile"];
}

const ResumeAside: React.FC<ResumeAsideProps> = ({ profile }) => {
  const { name, title, bio, phone, email, website, address, linkedin } =
    profile;

  const noProtocol = (uri: string) => uri.replace(/http[s]:\/\//, "");

  return (
    <aside className="resume-aside">
      <Image src="/lucas-engel.jpg" alt={name} width="250" height="250" />

      <header>
        <h1>{name}</h1>
        <small>{title}</small>
      </header>

      <div className="bio">
        <h2>Bio</h2>
        {bio.map((paragraph, index) => (
          <p className="bio-desc" key={`bio-${index}`}>
            {paragraph}
          </p>
        ))}

        <hr />

        <h2>Contact</h2>

        {/* <h3>Phone</h3>
        <p>{phone}</p> */}

        <h3>Email</h3>
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>

        <h3>Website</h3>
        <p>
          <a href={website}>{noProtocol(website)}</a>
        </p>

        <h3>Address</h3>
        <p>{address}</p>

        <hr />

        <h2>More Info</h2>
        <p>
          <a href={linkedin}>{noProtocol(linkedin)}</a>
        </p>
      </div>
    </aside>
  );
};

export default ResumeAside;
