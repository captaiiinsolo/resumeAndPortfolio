import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Resume from './pages/Resume';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
// import { setContext } from 'apollo-link-context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-me" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
