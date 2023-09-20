import React from "react";
import MainNav from "../components/MainNav/MainNav";
import { Container, Content, Header } from 'rsuite';
import Biography from "../components/Biography/Biography";


function Home() {
  return (
    <div>
      <Container>
        <MainNav />
        <Container>
          <Header>
          </Header>
          <Content>
            <Biography />
          </Content>
        </Container>
      </Container>
    </div>
  );
}

export default Home;