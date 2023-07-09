import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import silaan from "../../Assets/Projects/Silaan.webp";
import bitsOfCode from "../../Assets/Projects/blog.png";
import editor from "../../Assets/Projects/codeEditor.png";
import oneboard from "../../Assets/Projects/dashboard.svg";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oneboard}
              isBlog={false}
              title="OneBoard"
              description="Project Management tool that shows metrics aggregrated from scrum boards and code analysis tools like Sonarqube"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Content Management System"
              description="Content Management system to manage digital content for the team's use"
              ghLink="https://github.com/Recker4244/CMS-FE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Walnut"
              description="Social Health platform for connecting doctors and health experts with long-term patients"
              demoLink="https://play.google.com/store/apps/details?id=com.walnut.walnut_app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={silaan}
              isBlog={false}
              title="Silaan"
              description="E-commerce app for custom tailored clothing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/Recker4244/music_player/main/Screenshots/2.jpeg"
              isBlog={false}
              title="Music Player"
              description="A simple music player application for Android packed with all the features to give you the best listening experience with beautiful UI"
              ghLink="https://github.com/Recker4244/music_player"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
