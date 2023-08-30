import React from'react';
import { Nav, Navbar} from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
// import { Link } from 'react-router-dom';

// const NavLink = React.forwardRef(({ href, children, ...rest }, ref) => (
//   <Link ref={ref} to={href} {...rest}>
//     {children}
//   </Link>
// ));



function MainNav() {
    return (
        <Navbar appearance='subtle'>
            <Navbar.Brand>
                Solomon D. Santos
            </Navbar.Brand>
            <Nav pullRight>
                <Nav.Item href='/' eventKey='1' icon={<HomeIcon />}>Home</Nav.Item>
                <Nav.Item href='/resume' eventKey='2'>Resume</Nav.Item>
                <Nav.Item href='/projects' eventKey='3'>Projects</Nav.Item>
                <Nav.Item href='/contact-me' eventKey='4'>Contact Me</Nav.Item>
            </Nav>

        </Navbar>
    );

}

export default MainNav;

