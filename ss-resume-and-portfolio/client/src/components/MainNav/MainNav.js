import React, { useEffect } from 'react';
import { Nav, Sidenav, Sidebar, Navbar, Affix } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CharacterAuthorizeIcon from '@rsuite/icons/CharacterAuthorize';
import ProjectIcon from '@rsuite/icons/Project';
import SendIcon from '@rsuite/icons/Send';
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';

function MainNav() {
  const styles = {
    width: 56,
    display: 'inline-table',
    marginRight: 10
  };

  const GlobalNavToggle = ({ expand, onChange }) => {
    return (
      <Navbar appearance='sublte'>
        <Nav pullRight>
          <Nav.Item
            onClick={onChange}
            style={{ width: 56, textAlign: "center" }}
            icon={expand ? <AngleLeftIcon /> : <AngleRightIcon />}
          >
          </Nav.Item>
        </Nav>
      </Navbar>
    );
  }

  const GlobalNav = ({ appearance, openKeys, expanded, onOpenChange, onExpand, ...navProps }) => {

    const [expand, setExpand] = React.useState(false);


    return (
      <div style={styles}>
        <Affix top={0}>

        <Sidebar
          style={{ display: "flex", flexDirection: "column" }}
          width={expand ? 160 : 56}
          collapsible
        >
          <Sidenav
            appearance={appearance}
            expanded={expand}
            openKeys={openKeys}
            onOpenChange={onOpenChange}
          >
            <Sidenav.Body>
              <Nav {...navProps}>
                <Nav.Item href="/" eventKey="1" icon={<HomeIcon />}>
                  Home
                </Nav.Item>
                <Nav.Item
                  href="/resume"
                  eventKey="2"
                  icon={<CharacterAuthorizeIcon />}
                >
                  Resumé
                </Nav.Item>
                <Nav.Item href="/projects" eventKey="3" icon={<ProjectIcon />}>
                  Projects
                </Nav.Item>
                <Nav.Item href="/contact-me" eventKey="4" icon={<SendIcon />}>
                  Contact Me
                </Nav.Item>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          <GlobalNavToggle
            expand={expand}
            onChange={() => setExpand(!expand)}
          />
        </Sidebar>
        </Affix>
      </div>
    );
  };

  const [activeKey, setActiveKey] = React.useState('');
  const [expanded, setExpand] = React.useState(false);

  useEffect(() => {
    // Get the current URL path
    const currentPath = window.location.pathname;

    // Map the path to the corresponding eventKey
    const pathToEventKey = {
      '/': '1',
      '/resume': '2',
      '/projects': '3',
      '/contact-me': '4'
    };

    // Set the activeKey based on the current URL
    setActiveKey(pathToEventKey[currentPath] || '');
  }, []);

  return (
    <>
      <GlobalNav
        activeKey={activeKey}
        onSelect={setActiveKey}
        expanded={expanded}
        onExpand={setExpand}
        appearance='subtle'
      />
    </>
  );
}

export default MainNav;


