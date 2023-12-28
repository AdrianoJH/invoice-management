import React from 'react';
import { Container, Content, BoxImg } from './HomeStyle';
import ImgInvoice from '../../img/fatura.png';

const Home = () => {
  return (
    <Container>
      <Content>
        <h1>Gestão de Faturas</h1>
        <p>Este é um sistema de gestão de faturas.</p>
        <p>Aqui você pode gerenciar suas faturas, bem como fazer o download delas.</p>
      </Content>
      <BoxImg>
        <img src={ImgInvoice} alt="img-invoice" />
      </BoxImg>
    </Container>
  )
}

export default Home