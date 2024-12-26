import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashutosh Senapati </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            I am currently working as a Software Engineer at CuraTech Pvt. Ltd.
            I graduated with a Bachelor's in Technology (B.Tech) in Computer
            Science and Engineering from KIIT University.
            <br />
            My journey began in high-growth startup environments, where I honed
            my skills in problem-solving, adaptability, and driving impactful
            solutions under tight timelines. These experiences provided me with
            a strong entrepreneurial mindset and the ability to navigate
            ambiguity effectively. At McKinsey & Company, I further refined my
            analytical and strategic abilities, working on complex projects with
            high-level stakeholders to deliver transformative outcomes. This
            exposure deepened my understanding of structured problem-solving,
            cross-functional collaboration, and achieving excellence in a
            fast-paced, high-stakes environment.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">Playing Games 🎮</li>
            <li className="about-activity">Reading 📖</li>
            <li className="about-activity">Travelling ✈️</li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>"Never Settle" </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
