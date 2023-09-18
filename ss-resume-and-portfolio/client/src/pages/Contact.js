import MainNav from "../components/MainNav/MainNav";
import ContactMeForm from "../components/Forms/ContactMeForm";
import { Container, Content, Footer, Sidebar } from 'rsuite';

function Contact() {
    return (
        <div>
            <Container>
                <Sidebar>
                    <MainNav />
                </Sidebar>
               <Container>
               <Content>
                    <h1 style={{ textAlign: 'center', margin: '5rem'}}>Contact Me</h1>
                    <ContactMeForm />
                </Content>
               </Container>
                <Footer>
                </Footer>
            </Container>
        </div>

        
    )
}

export default Contact;