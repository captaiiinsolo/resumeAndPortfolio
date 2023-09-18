import MainNav from '../components/MainNav/MainNav';
import ResumePDF from '../components/ResumePDF/ResumePDF';
import { Container, Content, Sidebar } from 'rsuite';

function Resume() {
    return (
      <div>
        <Container>
          <Sidebar>
            <MainNav />
          </Sidebar>
          <Container>
            <Content>
              <ResumePDF />
            </Content>
          </Container>
        </Container>
      </div>
    );
}

export default Resume;