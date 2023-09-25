import { Grid, Row, Col, Progress, Panel } from 'rsuite';

const skills = [
    { id: 1, title: "MongoDB", percent: "80", color: "#00ED64", status: "active" },
    { id: 2, title: "Express.js", percent: "75", color: "#68A063", status: "active" },
    { id: 3, title: "React.js", percent: "85", color: "61DBFB", status: "active" },
    { id: 4, title: "Node.js", percent: "75", color: "#3C873A", status: "active" },
    { id: 5, title: "JavaScript", percent: "80", color: "#F7DF1E", status: "active" },
    { id: 6, title: "CSS", percent: "90", color: "#264DE4", status: "active" },
    { id: 7, title: "HTML", percent: "95", color: "#F06529", status: "active" },
    { id: 8, title: "Git CLI", percent: "85", color: "#171515", status: "active" },
    // { id: 9, title: "MySQL", percent: "80", color: "#00758F" },
  ];

export default function Stats() {
  const style = {
    width: 120,
    display: "inline-block",
    margin: 10,
    textAlign: "center",
  };

  const skillsList = skills.map((skill) => (
    <div style={style}>
      <Progress.Circle percent={skill.percent} gapPosition="bottom" strokeColor={skill.color} status={skill.status} />
      <p style={{ marginTop: "1rem" }}>{skill.title}</p>
    </div>
  ));

  return (
    <Grid fluid>
      <Row style={{ margin: "3rem" }}>
        <Col lg={22} style={{ margin: "1rem 1.5rem" }}>
          <Panel shaded style={{ display: 'flex', justifyContent: 'center' }}>{skillsList}</Panel>
        </Col>
      </Row>
    </Grid>
  );
}