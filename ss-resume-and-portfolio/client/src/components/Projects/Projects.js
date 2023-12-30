import ProjectCards from './ProjectCards';
import { Grid, Row, Col } from 'rsuite';
// import { motion } from "framer-motion";



const projects = [
  {
    id: 1,
    name: "Bullet Journal",
    description:
      "A journaling application for individuals who are tired of carrying pen and paper.",
    link: "https://bullet-journal.herokuapp.com/",
    image: require("../../assets/images/projectImages/bulletJournal.png"),
    git: "https://github.com/megellman/bullet-journal",
  },

  {
    id: 2,
    name: "MedTech",
    description:
      "A medical CRM clone designed to better connect patients to their medical providers.",
    link: "https://medtech.herokuapp.com/",
    image: require("../../assets/images/projectImages/medTech.png"),
    git: "https://github.com/joshmatsumoto/medTech",
  },

  {
    id: 3,
    name: "Full Spectrum",
    description:
      "Your one stop shop for weather, jobs, and housing all in one place.",
    link: "https://captaiiinsolo.github.io/jobDashboardProject/",
    image: require("../../assets/images/projectImages/fullSpectrum.png"),
    git: "https://github.com/captaiiinsolo/jobDashboardProject",
  },

  {
    id: 4,
    name: "Weather Dashboard",
    description:
      "A weather dashboard application that allows users to search for a city and see the current weather conditions.",
    link: 'https://captaiiinsolo.github.io/weatherDashboard/',
    image: require("../../assets/images/projectImages/weatherDashboard.png"),
    git: 'https://github.com/captaiiinsolo/weatherDashboard',
  },

  {
    id: 5,
    name: 'JavaScript Quiz App',
    description: 'A simple JavaScript quiz app built with HTML, CSS, and JavaScript.',
    link: 'https://captaiiinsolo.github.io/javaScriptQuiz/',
    image: require("../../assets/images/projectImages/javaScriptQuiz.png"),
    git: 'https://github.com/captaiiinsolo/javaScriptQuiz',
  },
];


export default function MyProjects() {

  const projectsList = projects.map((project) => (
      <Col>
        <ProjectCards
          name={project.name}
          description={project.description}
          link={project.link}
          image={project.image}
          git={project.git}
        />
      </Col>
  ));

  return (
    <Grid fluid>
      <Row style={{marginLeft: '5rem'}}>
        {projectsList}
      </Row>
    </Grid>
  );

};