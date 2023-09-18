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
              <h1>
                Contact Me
              </h1>
              <ContactMeForm />
            </Content>
          </Container>
          <Footer></Footer>
        </Container>
      </div>
    );
}

export default Contact;