import { Grid, Row, Col, Placeholder, Panel } from 'rsuite';

export default function Biography() {

  return (
    <Grid fluid>
      <Row style={{ margin: '3rem'}}>
        <Col xxl={11} xl={11} lg={22} md={22} sm={11} xs={22} style={{ margin: '2rem 1.5rem'}}>
          <Panel>
            <Placeholder rows={14} />
          </Panel>
        </Col>
        <Col xxl={11} xl={11} lg={22} md={22} sm={11} xs={22} style={{ margin: '2rem 1.5rem'}}>
          <Panel bodyFill>
            <div style={{ display: 'flex', justifyContent: 'center' }}><img src='https://placehold.co/600x400' alt='a placeholder for a bio pic' /></div>
          </Panel>
        </Col>
      </Row>

      <Row style={{ margin: '3rem'}}>
        <Col xxl={11} xl={11} lg={22} md={22} sm={22} xs={22} style={{ margin: '2rem 1.5rem'}}>
          <Panel bodyFill>
          <div style={{ display: 'flex', justifyContent: 'center' }}><img src='https://placehold.co/600x400' alt='a placeholder for bio pic number 2' /></div>
          </Panel>
        </Col>
        <Col xxl={11} xl={11} lg={22} md={22} sm={22} xs={22} style={{ margin: '2rem 1.5rem'}}>
          <Panel>
            <Placeholder rows={14} />
          </Panel>
        </Col>
      </Row>
    </Grid>
  );
}
