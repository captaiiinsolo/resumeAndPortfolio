import React from "react";
import MainNav from "../components/MainNav/MainNav";
import ContactMeForm from "../components/Forms/ContactMeForm";
import FooterNav from "../components/FooterNav/FooterNav";
import { Container, Content, Footer } from 'rsuite';

function Contact() {


    return (
      <div>
        <Container>
          <MainNav />
          <Container>
            <Content>
              <ContactMeForm />
            </Content>
          <Footer>
            <FooterNav />
          </Footer>
          </Container>
        </Container>
      </div>
    );
}

export default Contact;