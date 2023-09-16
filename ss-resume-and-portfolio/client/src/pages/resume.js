import MainNav from '../components/MainNav/MainNav';
import ResumePDF from '../components/ResumePDF/ResumePDF';
import { Container, Content, Header } from 'rsuite';

function Resume() {
    return (
        
           <Container>
            <Header>
                <MainNav />
            </Header>
            <Content>
                <ResumePDF />
            </Content>
            </Container>
        
    )
}

export default Resume;