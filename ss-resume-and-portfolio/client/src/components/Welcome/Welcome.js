import { Grid, Row, Col } from 'rsuite';
import { TypeAnimation } from 'react-type-animation';


export default function Welcome() {
    return (
      <Grid fluid>
        <Row style={{ margin: "3rem" }}>
          <Col lg={22} style={{ margin: "1rem 3rem" }}>
            <h1 style={{ fontSize: "2rem" }}>Welcome!</h1>
            <h2 style={{ fontSize: "4rem", lineHeight: "1.25" }}>
              Are you looking for a <br />
              <TypeAnimation
                sequence={[
                  "front-end web developer?",
                  2000,
                  "back-end web developer?",
                  2000,
                  "MERN stack developer?",
                  2000,
                ]}
                speed={50}
                style={{ color: "#02a9ea" }}
                repeat={Infinity}
                preRenderFirstString={true}
              />
            </h2>
          </Col>
        </Row>
      </Grid>
    );
}