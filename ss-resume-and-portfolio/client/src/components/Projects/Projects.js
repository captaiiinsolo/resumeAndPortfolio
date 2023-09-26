import ProjectCards from './ProjectCards';
import { Grid, Row, Col, Panel } from 'rsuite'

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
    name: "MedTech",
    description:
      "A medical CRM clone designed to better connect patients to their medical providers.",
    link: "https://medtech.herokuapp.com/",
    image: require("../../assets/images/projectImages/medTech.png"),
    git: "https://github.com/joshmatsumoto/medTech",
  },

  
  {
    id: 5,
    name: "Bullet Journal",
    description:
      "A journaling application for individuals who are tired of carrying pen and paper.",
    link: "https://bullet-journal.herokuapp.com/",
    image: require("../../assets/images/projectImages/bulletJournal.png"),
    git: "https://github.com/megellman/bullet-journal",
  },
  {
    id: 6,
    name: "Bullet Journal",
    description:
      "A journaling application for individuals who are tired of carrying pen and paper.",
    link: "https://bullet-journal.herokuapp.com/",
    image: require("../../assets/images/projectImages/bulletJournal.png"),
    git: "https://github.com/megellman/bullet-journal",
  },
  {
    id: 7,
    name: "Bullet Journal",
    description:
      "A journaling application for individuals who are tired of carrying pen and paper.",
    link: "https://bullet-journal.herokuapp.com/",
    image: require("../../assets/images/projectImages/bulletJournal.png"),
    git: "https://github.com/megellman/bullet-journal",
  },
];


export default function MyProjects() {

  const projectsList = projects.map((project) => (
    <div style={{ display: "inline-flex" }}>
      <Col>
        <ProjectCards
          name={project.name}
          description={project.description}
          link={project.link}
          image={project.image}
          git={project.git}
        />
      </Col>
    </div>
  ));

  return (
    <Grid fluid>
      <Row style={{marginLeft: '5rem'}}>
        {projectsList}
      </Row>
    </Grid>
  );

};