import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projectsData from "../../data/projectsData";

// Import placeholder images - replace with actual project images
import placeholder1 from "../../Assets/Projects/freelance-api.png";
import placeholder2 from "../../Assets/Projects/dev-tracker.png";
import placeholder3 from "../../Assets/Projects/artisan-ecommerce-new.png";
import placeholder4 from "../../Assets/Projects/hospital.png";
import placeholder5 from "../../Assets/Projects/ai-new-semantic.png";


// Map placeholder images to projects
const imageMap = {
  1: placeholder1,
  2: placeholder2,
  3: placeholder3,
  4: placeholder4,
  5: placeholder5,
};

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my GitHub projects with live demos and API documentation.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsData.map((project) => (
            <Col md={4} className="project-card" key={project.id}>
              <ProjectCard
                imgPath={imageMap[project.id] || placeholder1}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.githubUrl}
                demoLink={project.liveUrl}
                swaggerUrl={project.swaggerUrl}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
