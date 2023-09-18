import React from "react";
import MainNav from "../components/MainNav/MainNav";
import { Container, Content } from 'rsuite';


function Home() {
  return (
    <div>
      <Container>
        <MainNav />
        <Container>
          <Content>
            <h1>Home</h1>
          </Content>
        </Container>
      </Container>
    </div>
  );
}

export default Home;