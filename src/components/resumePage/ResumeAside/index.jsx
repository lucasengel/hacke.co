import React from "react"
import { Container } from "./styles"

export const ResumeAside = ({ profile }) => {
  const { name, title, bio, phone, email, website, address, linkedin } = profile

  const noProtocol = uri => uri.replace(/http[s]:\/\//, "")

  return (
    <Container>
      <img src="/lucas-engel.jpg" alt="Lucas Engel" />

      <header>
        <h1>{name}</h1>
        <small>{title}</small>
      </header>

      <div className="bio">
        <h2>Bio</h2>
        <p className="bio-desc">{bio}</p>

        <hr />

        <h2>Contact</h2>

        <h3>Phone</h3>
        <p>{phone}</p>

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
    </Container>
  )
}
