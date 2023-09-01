import ProjectCards from './ProjectCards';
import { Row, Col } from 'rsuite'

const bulletJournal = {
    name: "Bullet Journal",
    description: "A journaling application for individuals who are tired of carrying pen and paper.",
    link: "https://bullet-journal.herokuapp.com/",
    image: require("../../assets/images/projectImages/bulletJournal.png"),
    id: 1,
};

const medTech = {
    name: "MedTech",
    description: "A medical CRM clone designed to better connect patients to their medical providers.",
    link: "https://medtech.herokuapp.com/",
    image: require("../../assets/images/projectImages/medTech.png"),
    id: 2,
};

const fullSpectrum = {
    name: "Full Spectrum",
    description: "Your one stop shop for weather, jobs, and housing all in one place.",
    link: "https://captaiiinsolo.github.io/jobDashboardProject/",
    image: require("../../assets/images/projectImages/fullSpectrum.png"),
    id: 3,
}

function Project() {
    return (
      <div>
        <Row>
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

          <Col lg={6} md={8} sm={24} xs={24}>
            <ProjectCards
              name={medTech.name}
              description={medTech.description}
              link={medTech.link}
              image={medTech.image}
            />
          </Col>
        </Row>
      </div>
    );

}

export default Project;