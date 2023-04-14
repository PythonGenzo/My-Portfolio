import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Movie from "../../Assets/Projects/Movie.png";
import Weather from "../../Assets/Projects/weather.png";
import Meal from "../../Assets/Projects/Meal.png";
import Quiz from "../../Assets/Projects/quiz.png";
import Ecommerce from "../../Assets/Projects/e-commerce.png";
import Blog from "../../Assets/Projects/blog.webp";





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
              imgPath={Ecommerce}
              isBlog={false}
              title="MERN Ecommerce Application"
              description="An ecommerce app allows users to shop online, browse product catalogs, create wish lists, add items to a cart, and complete purchases. It also provides payment processing, shipping, and order management capabilities. "
              ghLink="https://github.com/PythonGenzo/ecommerce-mern-frontend"
              demoLink="https://ecommerce-mern-frontend-sepia.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blog}
              isBlog={false}
              title="Blog App"
              description="What is a blog app?
              A blog application is a web or mobile application with two sets of users: bloggers and readers. Bloggers use the app to create posts, edit posts, and submit posts for review by their editors."
              ghLink="https://github.com/PythonGenzo/mern-blog-app"
              demoLink="http://mern-blog-app-jet.vercel.app/"
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
              imgPath={Quiz}
              isBlog={false}
              title="Quiz Hub"
              description="Quizzes used to measure growth in knowledge, abilities, or skills. In Quiz hub, users can participate in the quiz based on the categories and the dificulty level. If the wrong answer selected, it will show the correct answer in green box. Final score will be given. Build using React Js."
              ghLink="https://github.com/PythonGenzo/Quiz-hub"
              demoLink="https://mern-san-quiz-app.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Meal}
              isBlog={false}
              title="Meal Planner"
              description="Meal planner offers user-friendly, customizable meal plans that you can tailor to your diet. The app builds your meal plan by taking your calorie preferences and display a day healthy meal plans along with receipes. Build using React Js."
              ghLink="https://github.com/PythonGenzo/meal-planner"
              demoLink="https://mern-meal-maker-app.netlify.app/" 
              />
          </Col>

{/* New Line for new projects  */}


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather Finder"
              description="Weather finder tells us the wind speed, the UV level, humidity levels, and even “feels like” temperature to account for the dreaded wind chill. Build using React Js."
              ghLink="https://github.com/PythonGenzo/Weather-Finder"
              demoLink="https://mern-weather-app.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
