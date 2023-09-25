import { Grid, Row, Col, Placeholder, Panel } from 'rsuite';

export default function Biography() {

  return (
    <Grid fluid>
      <Row style={{ margin: '3rem'}}>
        <Col lg={11} style={{ margin: '2rem 1.5rem'}}>
          <Panel>
            <Placeholder rows={14} />
          </Panel>
        </Col>
        <Col lg={11} style={{ margin: '2rem 1.5rem'}}>
          <Panel>
            <img src='https://placehold.co/600x400' alt='a placeholder for a bio pic' />
          </Panel>
        </Col>
      </Row>

      <Row style={{ margin: '3rem'}}>
        <Col lg={11} style={{ margin: '2rem 1.5rem'}}>
          <Panel>
            <img src='https://placehold.co/600x400' alt='a placeholder for bio pic number 2' />
          </Panel>
        </Col>
        <Col lg={11} style={{ margin: '2rem 1.5rem'}}>
          <Panel>
            <Placeholder rows={14} />
          </Panel>
        </Col>
      </Row>
    </Grid>
  );
}
