import { Container, CssBaseline } from '@material-ui/core';
import React from 'react';
import Footer from '../common/Footer';

const Main = () => {
  return (
    <Container component='main' maxWidth='md'>
      <CssBaseline />
      <span>hello world</span>
      <Footer />
    </Container>
  );
};

export default Main;
