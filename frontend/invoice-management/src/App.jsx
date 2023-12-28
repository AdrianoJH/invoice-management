import React from 'react';
import Routers from './routes/routes';
import { Container } from './styles/AppStyle';
import Header from './components/Header/Header';

const App = () => {
  return (
    <Container>
      <Header />
      <Routers />
    </Container>
  )
}

export default App
