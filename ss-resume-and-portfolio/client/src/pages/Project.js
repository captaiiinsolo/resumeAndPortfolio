import React from'react';
import MainNav from '../components/MainNav/MainNav';
import MyProjects from '../components/Projects/Projects';
import FooterNav from '../components/FooterNav/FooterNav';
import { Container, Content, Footer } from 'rsuite';


function Projects() {
    return (
      <div>
        <Container>
          <MainNav />
          <Container>
            <Content>
              <MyProjects />
            </Content>
            <Footer>
              <FooterNav />
            </Footer>
          </Container>
        </Container>
      </div>
    );
}

export default Projects;