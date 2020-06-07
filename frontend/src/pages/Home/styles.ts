import styled from 'styled-components';
import backgroundImage from '../../assets/home-background.svg';

export const Container = styled.div`
  height: 100vh;
  background: url(${backgroundImage}) no-repeat 550px bottom;

  @media (max-width: 900px) {
    div div {
      align-items: center;
      text-align: center;
    }

    div div header {
      margin: 48px auto 0;
    }

    div div main {
      align-items: center;
    }

    div div main h1 {
      font-size: 42px;
    }

    div div main p {
      font-size: 24px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  header {
    margin: 48px 0 0;
  }
`;

export const Main = styled.main`
  flex: 1;
  max-width: 560px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 54px;
    color: ${(props) => props.theme.colors.titleColor};
  }

  p {
    font-size: 24px;
    margin-top: 24px;
    line-height: 38px;
  }

  a {
    width: 100%;
    max-width: 360px;
    height: 72px;
    background: ${(props) => props.theme.colors.primaryColor};
    border-radius: 8px;
    text-decoration: none;

    display: flex;
    align-items: center;
    overflow: hidden;

    margin-top: 40px;

    &:hover {
      background: ${(props) => props.theme.colors.hoverButton};
    }

    span {
      display: block;
      background: rgba(0, 0, 0, 0.08);
      width: 72px;
      height: 72px;

      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s;
    }

    strong {
      flex: 1;
      text-align: center;
      color: #fff;
    }
  }
`;
