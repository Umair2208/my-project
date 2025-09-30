import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hrms from "../../Assets/Projects/hrms.png";
import weatherapp from "../../Assets/Projects/weather-app.png";

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
              imgPath={weatherapp}
              isBlog={false}
              title="Weather App"
              description="Developed a Weather App in React.js with a clean, user-friendly interface. The app allows users to search any city or region and fetches real-time weather data from a public API, displaying key details such as temperature, conditions, and location. Designed with responsiveness and simplicity for a smooth user experience."
              ghLink="https://github.com/Umair2208/weather-app"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hrms}
              isBlog={false}
              title="HRMS"
              description="Developed an HRMS application with features like employee management, attendance tracking, leave management, and role-based access, providing a streamlined and efficient workforce management solution."
              ghLink="https://github.com/Umair2208/weather-app"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
