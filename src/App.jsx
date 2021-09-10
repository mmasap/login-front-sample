import React, { useState } from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Main from 'components/content/Main';
import Footer from './components/common/Footer';

const App = () => {
  const [auth, setAuth] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const executeSignIn = (e) => {
    e.preventDefault();
    setAuth(true);
  };

  const executeSignUp = (e) => {
    e.preventDefault();
    setAuth(true);
  };

  if (!auth) {
    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        {!signUp && (
          <SignIn
            onClickSignIn={executeSignIn}
            changeSignUp={() => setSignUp((prev) => !prev)}
          />
        )}
        {signUp && (
          <SignUp
            onClickSignUp={executeSignUp}
            changeSignIn={() => setSignUp((prev) => !prev)}
          />
        )}
        <Footer />
      </Container>
    );
  }

  return <Main />;
};

export default App;
