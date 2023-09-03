import ProjectCards from './ProjectCards';
import { Row, Col } from 'rsuite'

const bulletJournal = {
    name: "Bullet Journal",
    description: "A journaling application for individuals who are tired of carrying pen and paper.",
    link: "https://bullet-journal.herokuapp.com/",
    image: require("../../assets/images/projectImages/bulletJournal.png"),
    id: 1,
    git: "https://github.com/megellman/bullet-journal",
};

const medTech = {
    name: "MedTech",
    description: "A medical CRM clone designed to better connect patients to their medical providers.",
    link: "https://medtech.herokuapp.com/",
    image: require("../../assets/images/projectImages/medTech.png"),
    id: 2,
    git: "https://github.com/joshmatsumoto/medTech",
};

const fullSpectrum = {
    name: "Full Spectrum",
    description: "Your one stop shop for weather, jobs, and housing all in one place.",
    link: "https://captaiiinsolo.github.io/jobDashboardProject/",
    image: require("../../assets/images/projectImages/fullSpectrum.png"),
    id: 3,
    git: "https://github.com/captaiiinsolo/jobDashboardProject",
}

function Project() {
    return (
      <div style={{ marginLeft: '3rem', marginRight: '3rem', padding: '1rem'}}>
        <Row>
          <Col lg={6} md={8} sm={24} xs={24}>
            <ProjectCards
              name={bulletJournal.name}
              description={bulletJournal.description}
              link={bulletJournal.link}
              image={bulletJournal.image}
              git={bulletJournal.git}
            />
          </Col>

          <Col lg={6} md={8} sm={24} xs={24}>
            <ProjectCards
              name={fullSpectrum.name}
              description={fullSpectrum.description}
              link={fullSpectrum.link}
              image={fullSpectrum.image}
              git={fullSpectrum.git}
            />
          </Col>
          <Col lg={6} md={8} sm={24} xs={24}>
            <ProjectCards
              name={medTech.name}
              description={medTech.description}
              link={medTech.link}
              image={medTech.image}
              git={medTech.git}
            />
          </Col>
          <Col lg={6} md={8} sm={24} xs={24}>
            <ProjectCards
              name={bulletJournal.name}
              description={bulletJournal.description}
              link={bulletJournal.link}
              image={bulletJournal.image}
              git={bulletJournal.git}
            />
          </Col>

          {/* <Col lg={6} md={8} sm={24} xs={24}>
            <ProjectCards
              name={medTech.name}
              description={medTech.description}
              link={medTech.link}
              image={medTech.image}
            />
          </Col> */}
        </Row>
        {/* <Row>
        <Col lg={6} md={8} sm={24} xs={24}>
            <ProjectCards
              name={fullSpectrum.name}
              description={fullSpectrum.description}
              link={fullSpectrum.link}
              image={fullSpectrum.image}
            />
          </Col>

          <Col lg={6} md={8} sm={24} xs={24}>
            <ProjectCards
              name={medTech.name}
              description={medTech.description}
              link={medTech.link}
              image={medTech.image}
            />
          </Col>
          <Col lg={6} md={8} sm={24} xs={24}>
            <ProjectCards
              name={bulletJournal.name}
              description={bulletJournal.description}
              link={bulletJournal.link}
              image={bulletJournal.image}
            />
          </Col>
          <Col lg={6} md={8} sm={24} xs={24}>
            <ProjectCards
              name={fullSpectrum.name}
              description={fullSpectrum.description}
              link={fullSpectrum.link}
              image={fullSpectrum.image}
            />
          </Col>
        </Row> */}
      </div>
    );

}

export default Project;