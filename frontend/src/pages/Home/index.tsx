import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import { Container, Content, Main } from './styles';

import logo from '../../assets/logo.svg';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <header>
          <img src={logo} alt="Ecoleta" />
        </header>

        <Main>
          <h1>Seu marketplace de coleta de resíduos.</h1>

          <p>
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
          </p>

          <NavLink to="/">
            <span>
              <FiLogIn color="#fff" size={20} />
            </span>

            <strong>Cadastre um ponto de coleta</strong>
          </NavLink>
        </Main>
      </Content>
    </Container>
  );
};

export default Home;
