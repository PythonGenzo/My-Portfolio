import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Movie from "../../Assets/Projects/Movie.png";



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
              imgPath={Movie}
              isBlog={false}
              title="Movie-App"
              description="CRUD React movie app "
              ghLink="https://github.com/PythonGenzo/Movies-App"
              demoLink="https://effervescent-basbousa-1d99a0.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Movie}
              isBlog={false}
              title="Movie-App"
              description="CRUD React movie app"
              ghLink="https://github.com/PythonGenzo/Movies-App"
              demoLink="https://effervescent-basbousa-1d99a0.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Movie}
              isBlog={false}
              title="Movie-App"
              description="CRUD React movie app"
              ghLink="https://github.com/PythonGenzo/Movies-App"
              demoLink="https://effervescent-basbousa-1d99a0.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Movie}
              isBlog={false}
              title="Movie-App"
              description="CRUD React movie app"
              ghLink="https://github.com/PythonGenzo/Movies-App"
              demoLink="https://effervescent-basbousa-1d99a0.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Movie}
              isBlog={false}
              title="Movie-App"
              description="CRUD React movie app"
              ghLink="https://github.com/PythonGenzo/Movies-App"
              // demoLink="https://effervescent-basbousa-1d99a0.netlify.app/" <--------Please include a demo link here
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
