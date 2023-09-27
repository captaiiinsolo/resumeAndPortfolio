import React from "react";
import MainNav from "../components/MainNav/MainNav";
import { Container, Content, Header } from 'rsuite';
import Biography from "../components/Biography/Biography";
import Welcome from "../components/Welcome/Welcome";
import DesignProcess from "../components/DesignProcess/DesignProcess";
import Skills from "../components/Skills/Skills";
import Footer from "../components/Footer/Footer";


function Home() {
  return (
    <div>
      <Container>
        <MainNav />
        <Container>
          <Header>
          </Header>
          <Content>
            <Welcome />
            <Biography />
            <Skills />
            <DesignProcess />
          </Content>
          <Footer />
        </Container>
      </Container>
    </div>
  );
}

export default Home;