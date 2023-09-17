import MainNav from "../components/MainNav/MainNav";
import ContactMeForm from "../components/Forms/ContactMeForm";
import { Container, Content, Footer, Header } from 'rsuite';

function Contact() {
    return (
        <div>
            <Container>
                <Header>
                    <MainNav />
                </Header>
                <Content>
                    <h1 style={{ textAlign: 'center', margin: '5rem'}}>Contact Me</h1>
                    <ContactMeForm />
                </Content>
                <Footer>
                </Footer>
            </Container>
        </div>

        
    )
}

export default Contact;