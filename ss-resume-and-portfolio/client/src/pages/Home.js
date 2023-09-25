import React from "react";
import MainNav from "../components/MainNav/MainNav";
import { Container, Content, Header } from 'rsuite';
import Biography from "../components/Biography/Biography";
import Welcome from "../components/Welcome/Welcome";
import Stats from "../components/Stats/Stats";
import DesignProcess from "../components/DesignProcess/DesignProcess";


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
            <Stats />
            <DesignProcess />
          </Content>
        </Container>
      </Container>
    </div>
  );
}

export default Home;