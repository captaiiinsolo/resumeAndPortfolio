import MainNav from '../components/MainNav/MainNav';
import Project from '../components/Projects/Projects';
import { Container, Content, Footer, Sidebar } from 'rsuite';


function Projects() {
    return (
      <div>
        <Container>
          <Sidebar>
            <MainNav />
          </Sidebar>
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