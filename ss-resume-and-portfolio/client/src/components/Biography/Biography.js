import { Grid, Row, Col, Panel, } from 'rsuite';
import PersonalStats from '../Stats/Personal/Personal';
import SiteStats from '../Stats/Site/Site';
import Socials from '../Socials/Socials';

export default function Biography() {
  return (
    <Grid fluid>
      <Row style={{ margin: "3rem" }}>
        <Col
          xxl={11}
          xl={11}
          lg={22}
          md={22}
          sm={11}
          xs={22}
          style={{ margin: "2rem 1.5rem" }}
        >
          <Panel>
            <h4>Yo! My name is Solomon.</h4>

            <p
              style={{ lineHeight: "1.5", fontSize: "18px", marginTop: "1rem" }}
            >
              As an accomplished artist and skilled developer, I bring a unique
              perspective to the tech industry. My passion for creativity and
              innovation has been shaped by my Associate of Fine Arts Degree
              from the Academy of Art University and my Certificate of
              Completion from the UC Berkeley Coding Bootcamp. With a strong
              foundation in design and programming, I excel at building
              user-centered applications and websites that are both visually
              stunning and highly functional.
              <br />
              <br />
              Outside of work, I enjoy surfing, photography, and fitness
              hobbies. These activities keep me balanced and inspired, allowing
              me to approach challenges with a fresh perspective. As a lifelong
              learner, I always seek new opportunities to grow personally and
              professionally. If you want a creative and dedicated team player,
              I would love to connect and explore how we can work together.
            </p>
          </Panel>
        </Col>
        <Col
          xxl={11}
          xl={11}
          lg={22}
          md={22}
          sm={11}
          xs={22}
          style={{ margin: "2rem 1.5rem" }}
        >
          <Panel bodyFill>
            <PersonalStats />
          </Panel>
        </Col>
      </Row>

      <Row style={{ margin: "3rem" }}>
        <Col
          xxl={11}
          xl={11}
          lg={22}
          lgOffset={1}
          md={22}
          mdOffset={1}
          sm={22}
          smOffset={1}
          xs={22}
          xsOffset={1}
          style={{ margin: "0rem 1.5rem" }}
        >
          <Panel>
            <Socials />
          </Panel>
        </Col>
        <Col
          xxl={11}
          xl={11}
          lg={22}
          md={22}
          sm={22}
          xs={22}
          style={{ margin: "2rem 1.5rem" }}
        >
          <Panel bodyFill>
            <SiteStats />
          </Panel>
        </Col>
      </Row>
    </Grid>
  );
}

