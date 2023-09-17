import React from'react';
import { Nav, Navbar } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import { MdWorkHistory, MdConnectWithoutContact, MdCode } from 'react-icons/md';
// import { Link } from 'react-router-dom';

// const NavLink = React.forwardRef(({ href, children, ...rest }, ref) => (
//   <Link ref={ref} to={href} {...rest}>
//     {children}
//   </Link>
// ));



function MainNav() {


    return (
      <Navbar appearance="subtle">
        <Navbar.Brand>
          Solomon D. Santos
        </Navbar.Brand>
        <Nav pullRight>
          <Nav.Item href="/" eventKey="1" icon={<HomeIcon />}>
          </Nav.Item>
          <Nav.Item href="/resume" icon={<MdWorkHistory />} eventKey="2">
          </Nav.Item>
          <Nav.Item href="/projects" icon={<MdCode />} eventKey="3">
          </Nav.Item>
          <Nav.Item href="/contact-me" icon={<MdConnectWithoutContact />} eventKey="4">
          </Nav.Item>
        </Nav>
      </Navbar>
    );

}

export default MainNav;

