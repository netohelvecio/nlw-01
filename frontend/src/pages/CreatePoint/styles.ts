import styled from 'styled-components';

import { IItemsProps } from '../../@types';

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;

  margin: 0 auto;
`;

export const Header = styled.header`
  margin-top: 48px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${(props) => props.theme.colors.titleColor};
    font-weight: bold;
    text-decoration: none;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }
  }
`;

export const Form = styled.form`
  margin: 80px auto;
  padding: 64px;
  max-width: 730px;
  background: ${(props) => props.theme.colors.trueWhite};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 36px;
  }

  fieldset {
    margin-top: 64px;
    min-inline-size: auto;
    border: 0;

    legend {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;

      h2 {
        font-size: 24px;
      }

      span {
        font-size: 14px;
        font-weight: normal;
        color: ${(props) => props.theme.colors.textColor};
      }
    }
  }

  .leaflet-container {
    width: 100%;
    height: 350px;
    border-radius: 8px;
    margin-bottom: 24px;
  }
`;

export const FieldGroup = styled.div`
  flex: 1;
  display: flex;

  div {
    & + div {
      margin-left: 24px;
    }
  }
`;

export const Field = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  input {
    flex: 1;
    background: ${(props) => props.theme.colors.white};
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: ${(props) => props.theme.colors.inputColor};

    &::placeholder {
      color: ${(props) => props.theme.colors.placeholderColor};
    }
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: ${(props) => props.theme.colors.inputColor};
  }
`;

export const ItemsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  list-style: none;
`;

export const Item = styled.li<IItemsProps>`
  background: ${(props) =>
    props.selected
      ? props.theme.colors.itemColorSelected
      : props.theme.colors.itemColor};
  border: 2px solid
    ${(props) =>
      props.selected
        ? props.theme.colors.primaryColor
        : props.theme.colors.itemColor};
  height: 180px;
  border-radius: 8px;
  padding: 32px 24px 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  text-align: center;

  cursor: pointer;

  span {
    flex: 1;
    margin-top: 12px;

    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.titleColor};
  }
`;

export const ButtonSubmit = styled.button`
  width: 260px;
  height: 56px;
  background: ${(props) => props.theme.colors.primaryColor};
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  border: 0;
  align-self: flex-end;
  margin-top: 40px;
  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => props.theme.colors.hoverButton};
  }
`;
