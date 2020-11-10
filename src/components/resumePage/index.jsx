import React from "react"
import "./styles.css"

const ResumePage = () => {
  return (
    <>
      <div className="container">
        <div className="row flexbox">
          <aside className="col">
            <img src="/lucas-engel.jpg" alt="Lucas Engel" />
            <div className="name">
              <h1>Lucas Engel</h1>
              <small>IT Project Manager</small>
            </div>
            <div className="profile">
              <h2>Profile</h2>
              <p className="desc">
                Project Manager with 8 years of experience in IT, helped
                businesses from 8 different countries and a variety of sizes up
                to the largest clothing retailer in Brazil. Detailed oriented,
                with high-level planning capacity, and great persuasion skills.
                Carries both technical and business understanding being able to
                lead and communicate across teams.
              </p>
              <hr />
              <h2>Contact</h2>
              <h3>Phone</h3>
              <p>+1 (705) 970 6195</p>
              <h3>Email</h3>
              <p>lucasengel@gmail.com</p>
              <h3>Website</h3>
              <p>
                <a href="http://hacke.co">hacke.co</a>
              </p>
              <h3>Address</h3>
              <p>
                2004/111 Raglan Avenue
                <br />
                Toronto, ON, Canada
              </p>
              <hr />
              <h2>More Info</h2>
              <p>
                <a href="http://linkedin.com/in/lucasengel">
                  linkedin.com/in/lucasengel
                </a>
              </p>
            </div>
          </aside>
          <main className="col">
            <h2>Experience</h2>
            <ul>
              <li>
                <h3>
                  Business Development &amp;
                  <br /> Technical Project Manager{" "}
                  <span className="right">Oct 2016 – ...</span>
                </h3>
                <small>Tyger Shark Inc</small>
                <p>
                  Managed all Agency division clients, supported the SME
                  division project managers, implemented a Professional Service
                  Automation software to the whole company.
                </p>
              </li>
              <li>
                <h3>
                  Freelance Web Developer{" "}
                  <span className="right">Oct 2015 – Sept 2016</span>
                </h3>
                <small>Chef Bruno</small>
                <p>
                  Working in an Agile iterative process, built a web application
                  from design files to a fully functional and responsive
                  interface using a JavaScript fullstack.
                </p>
              </li>
              <li>
                <h3>
                  Project Manager &amp; Co Founder{" "}
                  <span className="right">Feb 2014 – Sept 2015</span>
                </h3>
                <small>Auditorium</small>
                <p>
                  Responsible for managing the build of a Learning Management
                  System and six product launches that included websites builds,
                  educational materials creation and filming.
                </p>
              </li>
              <li>
                <h3>
                  Business Analyst{" "}
                  <span className="right">Apr 2013 – May 2014</span>
                </h3>
                <small>Compasso</small>
                <p>
                  Working for the largest clothing retailer in Brazil (Lojas
                  Renner): gathered business needs and converted into software
                  specification, hired and managed development and testing
                  companies, managed the software development lifecycle. Worked
                  along Ecommerce, HR, Marketign, and Finance domains.
                </p>
              </li>
              <li>
                <h3>
                  Project Manager &amp; Co Founder{" "}
                  <span className="right">Jan 2009 – Aug 2012</span>
                </h3>
                <small>Fande Web Development</small>
                <p>
                  Responsible for building software specifications, agile
                  project management and client relationship. Build softwares
                  for Brazil, China, Germany, USA, France, Finland, and Sweden.
                </p>
              </li>
            </ul>
            <h2>Education</h2>
            <ul>
              <li>
                <h3>
                  Project Management (PMI v5){" "}
                  <span className="right">2014</span>
                </h3>
                <small>SISNEMA</small>
              </li>
              <li>
                <h3>
                  Business Analyst for Agile Projects{" "}
                  <span className="right">2013</span>
                </h3>
                <small>SISNEMA</small>
              </li>
              <li>
                <h3>
                  B.A. Communication, Advertising{" "}
                  <span className="right">2007-2011</span>
                </h3>
                <small>Universidade Federal do Rio Grande do Sul</small>
              </li>
            </ul>
            <h2>Languages &amp; Skills</h2>
            <p>
              <strong>Languages:</strong> English, Portuguese, and Spanish
            </p>
            <p>
              <strong>Skills:</strong> Project Management, ITIL, SDLC, Business
              Analysis, BPM, Scrum, Kanban, UML, JavaScript, Ruby on Rails, PHP,
              Node.js, Angular, React.js, Meteor, MongoDB, MySQL, PostGreSQL,
              *NIX
            </p>
          </main>
        </div>
      </div>
    </>
  )
}

export default ResumePage
