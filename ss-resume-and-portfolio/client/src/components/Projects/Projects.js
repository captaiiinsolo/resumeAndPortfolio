import ProjectCards from './ProjectCards';
import { Grid, Row, Col } from 'rsuite';
import { motion } from "framer-motion";



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
];


export default function MyProjects() {

  const projectsList = projects.map((project) => (
    <motion.div key={project.id} style={{ display: "inline-flex" }} whileHover={{ scale: 1.05}}>
      <Col>
        <ProjectCards
          name={project.name}
          description={project.description}
          link={project.link}
          image={project.image}
          git={project.git}
        />
      </Col>
    </motion.div>
  ));

  return (
    <Grid fluid>
      <Row style={{marginLeft: '5rem'}}>
        {projectsList}
      </Row>
    </Grid>
  );

};