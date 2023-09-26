import React from "react";
import MainNav from "../components/MainNav/MainNav";
import ContactMeForm from "../components/Forms/ContactMeForm";
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
          </Container>
          <Footer></Footer>
        </Container>
      </div>
    );
}

export default Contact;