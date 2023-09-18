import MainNav from "../components/MainNav/MainNav";
import { Container, Content, Sidebar } from 'rsuite';


function Home() {
    return (
      <div>
        <Container>
          <Sidebar>
            <MainNav />
          </Sidebar>
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