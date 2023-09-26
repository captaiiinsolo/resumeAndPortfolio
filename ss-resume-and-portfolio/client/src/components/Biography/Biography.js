import { Grid, Row, Col, Placeholder, Panel, Carousel, } from 'rsuite';
import PersonalStats from '../Stats/Personal/Personal';

const styles = {
  radioGroupLabel: {
    padding: '8px 12px',
    display: 'inline-block',
    verticalAlign: 'middle'
  }
};

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

            <Placeholder rows={14} />
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
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://placehold.co/600x400"
                alt="a placeholder for a bio pic"
              />
            </div>
          </Panel>
        </Col>
      </Row>

      <Row style={{ margin: "3rem" }}>
        <Col
          xxl={11}
          xl={11}
          xxlPush={12}
          xlPush={11}
          lg={22}
          lgOffset={1}
          md={22}
          mdOffset={1}
          sm={22}
          smOffset={1}
          xs={22}
          xsOffset={1}
          style={{ margin: "2rem 1.5rem" }}
        >
          
            <Carousel placement='bottom' shape='bar'>
              <PersonalStats />

            </Carousel>
          
        </Col>
        <Col
          xxl={11}
          xxlPull={12}
          xl={11}
          xlPull={11}
          lg={22}
          md={22}
          sm={22}
          xs={22}
          style={{ margin: "2rem 1.5rem" }}
        >
          <Panel bodyFill>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://placehold.co/600x400"
                alt="a placeholder for bio pic number 2"
              />
            </div>
          </Panel>
        </Col>
      </Row>
    </Grid>
  );
}
