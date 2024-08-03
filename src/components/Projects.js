// Projects.js
import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/Sample.png';
import projImg2 from '../assets/img/Supermarket_System_Sample.png';
import colorSharp2 from '../assets/img/color-sharp2.png'; // Import the image
import Youtube_Clone from '../assets/img/Youtube_Clone.png'
import path_finding from '../assets/img/Path-finding.png'
import password_manager from "../assets/img/Password-Manager.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Youtube Clone',
      description: 'ReactJS',
      imgUrl: Youtube_Clone,
      gitLink: 'https://github.com/MitBhardiwala/Youtube-Clone',
      isLive:true,
      liveLink:"https://youtube-clone-lake-three.vercel.app/"
    },
    {
      title: 'Path-Finding Visualizer',
      description: 'ReactJS',
      imgUrl: path_finding,
      gitLink: 'https://github.com/MitBhardiwala/path-finding-visualizer',
      isLive:true,
      liveLink:"https://path-finding-visualizer-five.vercel.app/"
    },
    {
      title: 'Password Manager',
      description: 'ReactJS Express MongoDB',
      imgUrl: password_manager,
      gitLink: 'https://github.com/MitBhardiwala/Password-Manager',
      isLive:true,
      liveLink:"https://667aabb777c76a05ff7c58a6--dainty-alfajores-e70f25.netlify.app/"
    },
    {
      title: 'Movie Recommender System',
      description: 'Machine Learning',
      imgUrl: projImg1,
      gitLink: 'https://github.com/MitBhardiwala/st-movie-recommender-system',
    },
    {
      title: 'SuperMarket Management System',
      description: 'Python MySql',
      imgUrl: projImg2,
      gitLink: 'https://github.com/MitBhardiwala/SuperMarket-Management-System',
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Projects</h2>
                  <p>
                    {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. */}
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      {/* Nav items */}
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit,
                          rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus
                          quasi inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit,
                          rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus
                          quasi inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Image" />
    </section>
  );
};
