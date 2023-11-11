import React from "react";
import MainNav from "../components/MainNav/MainNav";
import { Container, Content, Header, Footer } from 'rsuite';
import Biography from "../components/Biography/Biography";
import Welcome from "../components/Welcome/Welcome";
import DesignProcess from "../components/DesignProcess/DesignProcess";
import Skills from "../components/Skills/Skills";
import FooterNav from "../components/FooterNav/FooterNav";


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
          <Footer>
            <FooterNav />
          </Footer>
        </Container>
      </Container>
    </div>
  );
}

export default Home;