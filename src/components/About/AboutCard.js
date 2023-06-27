import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashutosh Senapati </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br /> I am a final year student pursuing a Bachelor's in Technology (B.Tech)
            in Computer Science and Engineering at KIIT University.
            <br />
            Additionally, I am currently employed as a Software Engineer Intern at
            McKinsey & Company.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
            Playing Games 🎮
            </li>
            <li className="about-activity">
              Reading 📖
            </li>
            <li className="about-activity">
              Travelling ✈️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Never Settle"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
