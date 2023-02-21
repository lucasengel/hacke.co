import { IExperience } from "@/types";

import "./ResumeNode.scss";

const ResumeNode: React.FC<IExperience> = ({
  title,
  start,
  end,
  institution,
  description,
}) => (
  <section className="resume-node">
    <div>
      <div>
        <h3>{title}</h3>
        <small>{institution}</small>
      </div>
      <span className="date">
        {start}
        {end ? ` – ${end}` : "..."}
      </span>
    </div>
    {Array.isArray(description) && (
      <ul>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}
    {typeof description === "string" && <p>{description}</p>}
  </section>
);

export default ResumeNode;
