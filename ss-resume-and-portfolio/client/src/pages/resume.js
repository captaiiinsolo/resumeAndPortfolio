import React from 'react';
import MainNav from '../components/MainNav/MainNav';
import ResumePDF from '../components/ResumePDF/ResumePDF';
import FooterNav from '../components/FooterNav/FooterNav';
import { Container, Content, Footer } from 'rsuite';

function Resume() {
    return (
      <div>
        <Container>
          <MainNav />
          <Container>
            <Content>
              <ResumePDF />
            </Content>
            <Footer>
              <FooterNav />
            </Footer>
          </Container>
        </Container>
      </div>
    );
}

export default Resume;