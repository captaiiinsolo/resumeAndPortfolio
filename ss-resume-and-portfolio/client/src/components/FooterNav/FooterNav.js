import React from 'react';
import { Nav, Grid, Row, Col } from 'rsuite';

export default function FooterNav() {
  const FooterNav1 = ({ active, onSelect, ...props }) => {
    return (
      <Nav
        {...props}
        vertical
        activeKey={active}
        onSelect={onSelect}
      >
        <Nav.Item href='/' eventKey="1">Home</Nav.Item>
        <Nav.Item href='/resume' eventKey="">Resumé</Nav.Item>
        <Nav.Item href='/projects' eventKey="">Projects</Nav.Item>
        <Nav.Item href='/contact-me' eventKey="">Contact Me</Nav.Item>
        
      </Nav>
    );
  };

  const FooterNav2 = ({ active, onSelect,...props }) => {
    return (
      <Nav
        {...props}
        vertical
        activeKey={active}
        onSelect={onSelect}
        >
      
        <Nav.Item href='#biography' eventKey='2'>Biography</Nav.Item>
        <Nav.Item href='#socials' eventKey='3'>Socials</Nav.Item>
        <Nav.Item href='#skills' eventKey='4'>Skills</Nav.Item>
        <Nav.Item href='#process' eventKey='5'>The Process</Nav.Item>
      </Nav>
    );
  }
  

  const [active, setActive] = React.useState('home');

  return (
    <Grid fluid>
      <Row style={{ margin: "3rem"}}>
        <Col style={{ margin: "2rem 1.5rem"}}>
          <h6>Page Navigation</h6>
         <FooterNav1 active={active} onSelect={setActive} appearance='sublte' />
        </Col>
        <Col style={{ margin: "2rem 1.5rem"}}>
          <h6>Home Page Sections</h6>
          <FooterNav2 active={active} onSelect={setActive} appearance='sublte' />
        </Col>
      </Row>
    </Grid>
  );
}