import React from'react';
import MainNav from '../components/MainNav/MainNav';
import Project from '../components/Projects/Projects';
import { Container, Content, Footer } from 'rsuite';


function Projects() {
    return (
      <div>
        <Container>
            <MainNav />
          <Container>
            <Content>
              <Project />
            </Content>
          </Container>
          <Footer></Footer>
        </Container>
      </div>
    );
}

export default Projects;