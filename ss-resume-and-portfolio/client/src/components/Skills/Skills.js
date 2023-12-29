import React, { useState, useEffect, useRef } from "react";
import { Grid, Row, Col, Progress, Panel } from 'rsuite';
import { Icon } from '@rsuite/icons';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiHtml5, SiJavascript, SiCss3, SiGit, SiMysql } from "react-icons/si";
// import { motion } from 'framer-motion';

const myStats = [
    { id: '01', title: "MongoDB", percent: 80, color: "#00ED64", status: "active", icon: SiMongodb },
    { id: '02', title: "Express.js", percent: 80, color: "#68A063", status: "active", icon: SiExpress },
    { id: '03', title: "React.js", percent: 85, color: "61DBFB", status: "active", icon: SiReact },
    { id: '04', title: "Node.js", percent: 75, color: "#3C873A", status: "active", icon: SiNodedotjs },
    { id: '05', title: "JavaScript", percent: 80, color: "#F7DF1E", status: "active", icon: SiJavascript },
    { id: '06', title: "CSS", percent: 90, color: "#264DE4", status: "active", icon: SiCss3 },
    { id: '07', title: "HTML", percent: 95, color: "#F06529", status: "active", icon: SiHtml5 },
    { id: '08', title: "Git CLI", percent: 85, color: "#171515", status: "active", icon: SiGit },
    { id: '09', title: "MySQL", percent: 80, color: "#00758F", status: "active", icon: SiMysql },
  ];

export default function Skills() {
  const [inViewport, setInViewport] = useState(false);
  const [animationProgress, setAnimationProgress] = useState([]);
  const statsListRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInViewport(true);
          } else {
            setInViewport(false);
          }
        });
      },
      { threshold: 0.5 }
    );
  
    const statsListCurrent = statsListRef.current; // Capture current value
  
    if (statsListCurrent) {
      observer.observe(statsListCurrent);
    }
  
    return () => {
      if (statsListCurrent) {
        observer.unobserve(statsListCurrent);
      }
    };
  }, []);
  

  useEffect(() => {
    if (inViewport) {
      const interval = setInterval(() => {
        setAnimationProgress((prevProgress) => {
          return prevProgress.map((prevSkill, index) => {
            const targetProgress = myStats[index].percent;
            const step = 1;
            return prevSkill + step <= targetProgress ? prevSkill + step : targetProgress;
          });
        });
      }, 50); // Adjust the interval duration for smoother animation

      return () => {
        clearInterval(interval);
      };
    }
  }, [inViewport]);

  useEffect(() => {
    setAnimationProgress(Array(myStats.length).fill(0));
  }, []); // Initialize animationProgress to an array of zeros of the same length as myStats

  const style = {
    width: 90,
    display: "inline-block",
    justifyContent: "center",
    margin: "1rem",
    textAlign: "center",
  };

  const statsList = myStats.map((stat, index) => (
    <div style={style} key={stat.id} ref={statsListRef}>
        <Progress.Circle
          percent={animationProgress[index]}
          gapPosition="bottom"
          strokeColor={stat.color}
          status={stat.status}
        />
      <p style={{ margin: "1rem" }}>{stat.title}</p>
      <Icon as={stat.icon} size="2em" style={{ color: stat.color }} />
    </div>
  ));

  return (
      <Grid fluid>
      <Row style={{ margin: "3rem" }}>
        <Col lg={22} style={{ margin: "1rem 1.5rem" }}>
          <Panel id='skills' shaded style={{ display: "flex", justifyContent: "center", marginLeft: "2.5rem" }}>
            <h4 style={{ margin: "1rem 0" }}>My Skills</h4>
            {statsList}
          </Panel>
        </Col>
      </Row>
    </Grid>
  );
}