import React from 'react';
import MainNav from '../components/MainNav/MainNav';
import ResumePDF from '../components/ResumePDF/ResumePDF';
import { Container, Content } from 'rsuite';

function Resume() {
    return (
      <div>
        <Container>
          <MainNav />
          <Container>
            <Content>
              <ResumePDF />
            </Content>
          </Container>
        </Container>
      </div>
    );
}

export default Resume;