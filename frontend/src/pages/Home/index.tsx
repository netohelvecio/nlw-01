import React, { useContext } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Container, Content, Main } from './styles';

import logo from '../../assets/logo.svg';

const Home: React.FC = () => {
  const { colors } = useContext(ThemeContext);

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

          <NavLink to="/create-point">
            <span>
              <FiLogIn color={colors.trueWhite} size={20} />
            </span>

            <strong>Cadastre um ponto de coleta</strong>
          </NavLink>
        </Main>
      </Content>
    </Container>
  );
};

export default Home;
