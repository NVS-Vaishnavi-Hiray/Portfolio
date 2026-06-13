import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Novius Business System"
              description="An enterprise-level HR and Business Management system designed for employee onboarding, document uploading, sidebar navigation controls, and comprehensive administration capabilities. Built using React, CSS, Node.js, and Express."
              ghLink="https://github.com/NVS-Vaishnavi-Hiray"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Personal Portfolio"
              description="A professional and fully responsive personal portfolio website built with React, React-Bootstrap, and custom CSS animations to highlight development skillsets, workspace tools, and active projects."
              ghLink="https://github.com/NVS-Vaishnavi-Hiray/Portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="E-Commerce Admin Dashboard"
              description="A robust backend-integrated store management dashboard built using the MERN stack. Enables real-time inventory tracking, orders visualization, client listings, and administrative stats monitoring."
              ghLink="https://github.com/NVS-Vaishnavi-Hiray"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Task Management Application"
              description="A collaborative task scheduling and tracking tool built using React, Node.js, and MongoDB. Supports drag-and-drop boards, member assignments, status tags, and task deadlines."
              ghLink="https://github.com/NVS-Vaishnavi-Hiray"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
