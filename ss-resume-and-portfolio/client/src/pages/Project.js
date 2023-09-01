import MainNav from '../components/MainNav/MainNav';
import Project from '../components/Projects/Projects';
import { Container, Content, Footer, Header } from 'rsuite';


function Projects() {
    return (
        <div>
        <Container>
            <Header>
                <MainNav />
            </Header>
            <Content>
                <Project />
            </Content>
            <Footer>
            </Footer>
        </Container>
    </div>

    )
}

export default Projects;