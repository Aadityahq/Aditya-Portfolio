import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-egurukul.png";
import projImg2 from "../assets/img/project-AdminPro.png";
import projImg3 from "../assets/img/project-aquaveda1.png";
import projImg4 from "../assets/img/coming - soon.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-router-dom";

export const Projects = () => {

const projects = [
  {
    title: "E-Gurukul",
    description: "EdTech platform for online courses with payments and media handling.",
    imgUrl: projImg1,
    liveLink: "https://e-gurukul-online.vercel.app/",
    githubLink: "https://github.com/Aadityahq/E-Gurukul"
  },
  {
    title: "AdminPro",
    description: "Admin dashboard with charts, Kanban, and calendar features.",
    imgUrl: projImg2,
    liveLink: "https://adminpro-second.vercel.app/",
    githubLink: "https://github.com/Aadityahq/Admin_Pro.git"
  },
  {
    title: "AquaVeda",
    description: "Wiki-based platform promoting water conservation.",
    imgUrl: projImg3,
    liveLink: "", // leave empty if no live site yet
    githubLink: "https://github.com/Mystify7777/Water-Wiki.git"
  },
   {
    title: "Coming Soon ... ",
    description: "More projects on Web Dev is coming",
    imgUrl: projImg4,
    liveLink: "", // leave empty if no live site yet
    githubLink: ""
  }
];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have worked on a wide range of projects. Here are some of my projects.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web App's</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Android App</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Machine Learning</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
