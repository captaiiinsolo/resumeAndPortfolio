import { Grid, Row, Col, Progress, Panel } from 'rsuite';
import { Icon } from '@rsuite/icons';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiHtml5, SiJavascript, SiCss3, SiGit, SiMysql } from "react-icons/si";

const skills = [
    { id: 1, title: "MongoDB", percent: "80", color: "#00ED64", status: "active", icon: SiMongodb },
    { id: 2, title: "Express.js", percent: "75", color: "#68A063", status: "active", icon: SiExpress },
    { id: 3, title: "React.js", percent: "85", color: "61DBFB", status: "active", icon: SiReact },
    { id: 4, title: "Node.js", percent: "75", color: "#3C873A", status: "active", icon: SiNodedotjs },
    { id: 5, title: "JavaScript", percent: "80", color: "#F7DF1E", status: "active", icon: SiJavascript },
    { id: 6, title: "CSS", percent: "90", color: "#264DE4", status: "active", icon: SiCss3 },
    { id: 7, title: "HTML", percent: "95", color: "#F06529", status: "active", icon: SiHtml5 },
    { id: 8, title: "Git CLI", percent: "85", color: "#171515", status: "active", icon: SiGit },
    { id: 9, title: "MySQL", percent: "80", color: "#00758F", status: "active", icon: SiMysql },
  ];

export default function Stats() {
  const style = {
    width: 90,
    display: "inline-block",
    margin: '1rem',
    textAlign: "center",
  };

  const skillsList = skills.map((skill) => (
    <div style={style}>
      <Progress.Circle percent={skill.percent} gapPosition="bottom" strokeColor={skill.color} status={skill.status} />
      <p style={{ margin: "1rem" }}>{skill.title}</p>
      <Icon as={skill.icon} size='2em' style={{ color: skill.color}} />
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