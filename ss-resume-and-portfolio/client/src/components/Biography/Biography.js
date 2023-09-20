import { Tooltip } from 'bootstrap';
import { TypeAnimation } from 'react-type-animation';
import { Grid, Row, Col, Whisper } from 'rsuite';

export default function Biography() {
    return (
      <Grid fluid>
        <Row>
          <Col lg={8}>
            <h1>
              Hafa Adai! My name is Solomon.
            </h1>
            <TypeAnimation
              sequence={[
                "I am a full-stack web developer.",
                2000,
                "I am a photographer.",
                2000,
                "I am a surfer.",
                2000,
                "I am a father.",
                2000,
                "I am your next hire!",
                2000,
              ]}
              speed={75}
              style={{ fontSize: "2rem" }}
              repeat={Infinity}
            />
          </Col>
        </Row>
      </Grid>
    );
}