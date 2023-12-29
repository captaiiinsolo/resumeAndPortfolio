import React from 'react';
import { Nav, Grid, Row, Col, Drawer, Tooltip, Whisper } from 'rsuite';
import AngleUpIcon from '@rsuite/icons/legacy/AngleUp';

export default function FooterNav() {
  const FooterNav1 = ({ active, onSelect, ...props }) => {
    return (
      <Nav {...props} vertical activeKey={active} onSelect={onSelect}>
        <Nav.Item href='/' eventKey="1">Home</Nav.Item>
        <Nav.Item href='/resume' eventKey="2">Resumé</Nav.Item>
        <Nav.Item href='/projects' eventKey="3">Projects</Nav.Item>
        <Nav.Item href='/contact-me' eventKey="4">Contact Me</Nav.Item>
      </Nav>
    );
  };

  const FooterNav2 = ({ active, onSelect, ...props }) => {
    return (
      <Nav {...props} vertical activeKey={active} onSelect={onSelect}>
        <Nav.Item href='#biography' eventKey='5'>Biography</Nav.Item>
        <Nav.Item href='#socials' eventKey='6'>Socials</Nav.Item>
        <Nav.Item href='#skills' eventKey='7'>Skills</Nav.Item>
        <Nav.Item href='#process' eventKey='8'>The Process</Nav.Item>
      </Nav>
    );
  };

  const FooterNav3 = ({ active, onSelect, ...props }) => {
    return (
      <Nav {...props} vertical activeKey={active} onSelect={onSelect}>
        {/* Add your Nav.Items here */}
      </Nav>
    );
  };

  const [active, setActive] = React.useState('home');
  const isMainPage = window.location.pathname === '/'; // Check if on the main page
  const [open, setOpen] = React.useState(false);

  return (
    <Grid fluid style={{ paddingBottom: "60px" }}>
      <Row style={{display: 'flex', justifyContent: 'center'}}>
        <Col>
          {/* Drawer */}
          <Drawer
            placement="bottom"
            size="sm"
            open={open}
            onClose={() => setOpen(false)}
          >
            <Drawer.Header>
              <Drawer.Title>Footer Navigation</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              {/* FooterNav1 */}
              <Col style={{ margin: "2rem 1.5rem" }}>
                <p style={{ fontWeight: "bold", marginBottom: "1rem" }}>
                  Page Navigation
                </p>
                <FooterNav1
                  active={active}
                  onSelect={setActive}
                  appearance="subtle"
                />
              </Col>

              {/* Conditionally render FooterNav2 only on the main page */}
              {isMainPage && (
                <Col style={{ margin: "2rem 1.5rem" }}>
                  <p style={{ fontWeight: "bold", marginBottom: "1rem" }}>
                    Home Page Sections
                  </p>
                  <FooterNav2
                    active={active}
                    onSelect={setActive}
                    appearance="subtle"
                  />
                </Col>
              )}

              {/* FooterNav3 */}
              <Col style={{ margin: "2rem 1.5rem" }}>
                <p style={{ fontWeight: "bold", marginBottom: "1rem" }}>
                  Resources
                </p>
                <FooterNav3
                  active={active}
                  onSelect={setActive}
                  appearance="subtle"
                />
              </Col>
            </Drawer.Body>
          </Drawer>

          {/* Angle Up Icon */}
          <Whisper
            followCursor
            placement='bottom'
            controlId='control-id-hover'
            trigger='hover'
            speaker={<Tooltip>Click here to access site footer</Tooltip>}
          >
          <AngleUpIcon
            onClick={() => setOpen(true)} // Open the drawer when clicked
            style={{ fontSize: "24px", cursor: "pointer"}}
          />
          </Whisper>
        </Col>
      </Row>
    </Grid>
  );
}
