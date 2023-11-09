import React from 'react';
import { Nav, Grid, Row, Col, Button } from 'rsuite';

export default function Footer() {
  const FooterNav = ({ active, onSelect, ...props }) => {
    return (
      <Nav
        {...props}
        vertical
        activeKey={active}
        onSelect={onSelect}
      >
        <Nav.Item href='/' eventKey="1">Home</Nav.Item>
        <Nav.Item href='/resume' eventKey="2">Resumé</Nav.Item>
        <Nav.Item href='/projects' eventKey="3">Projects</Nav.Item>
        <Nav.Item href='/contact-me' eventKey="4">Contact Me</Nav.Item>
      </Nav>
    );
  };
  

  const [active, setActive] = React.useState('home');

  return (

    <Grid fluid>
      <Row style={{ margin: "2rem" }}>
        <Col lg={22} style={{ margin: "1rem 1.5rem"}}>
         <FooterNav active={active} onSelect={setActive} appearance='sublte' />
        </Col>
      </Row>
    </Grid>
  );
}