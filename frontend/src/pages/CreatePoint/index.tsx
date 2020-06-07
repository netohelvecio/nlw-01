import React, { useContext } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { FiArrowLeft } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import {
  Container,
  Header,
  Form,
  FieldGroup,
  Field,
  ItemsList,
  Item,
  ButtonSubmit,
} from './styles';

import logo from '../../assets/logo.svg';

const CreatePoint: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <Header>
        <img src={logo} alt="Ecoleta" />

        <NavLink to="/">
          <FiArrowLeft color={colors.primaryColor} size={20} />
          Voltar para home
        </NavLink>
      </Header>

      <Form>
        <h1>Cadastro do ponto de coleta</h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <Field>
            <label htmlFor="name">Nome da entidade</label>
            <input type="text" id="name" />
          </Field>

          <FieldGroup>
            <Field>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" />
            </Field>

            <Field>
              <label htmlFor="whatsapp">Whatsapp</label>
              <input type="text" id="whatsapp" />
            </Field>
          </FieldGroup>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione um endereço no mapa</span>
          </legend>

          <Map center={[-12.9189293, -38.3982442]} zoom={15}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[-12.9189293, -38.3982442]} />
          </Map>

          <FieldGroup>
            <Field>
              <label htmlFor="uf">Estado</label>
              <select name="uf" id="uf">
                <option value="0">Selecione um estado</option>
              </select>
            </Field>

            <Field>
              <label htmlFor="city">Cidade</label>
              <select name="city" id="city">
                <option value="0">Selecione uma cidade</option>
              </select>
            </Field>
          </FieldGroup>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Ítens de coleta</h2>
            <span>Selecione um ou mais ítens abaixo</span>
          </legend>

          <ItemsList>
            <Item selected>
              <img
                src="http://localhost:3333/image/oleo1591428141043.svg"
                alt="oleo"
              />
              <span>Óleo</span>
            </Item>

            <Item>
              <img
                src="http://localhost:3333/image/oleo1591428141043.svg"
                alt="oleo"
              />
              <span>Óleo</span>
            </Item>

            <Item>
              <img
                src="http://localhost:3333/image/oleo1591428141043.svg"
                alt="oleo"
              />
              <span>Óleo</span>
            </Item>

            <Item>
              <img
                src="http://localhost:3333/image/oleo1591428141043.svg"
                alt="oleo"
              />
              <span>Óleo</span>
            </Item>

            <Item>
              <img
                src="http://localhost:3333/image/oleo1591428141043.svg"
                alt="oleo"
              />
              <span>Óleo</span>
            </Item>

            <Item>
              <img
                src="http://localhost:3333/image/oleo1591428141043.svg"
                alt="oleo"
              />
              <span>Óleo</span>
            </Item>
          </ItemsList>
        </fieldset>

        <ButtonSubmit type="submit">Cadastrar ponto de coleta</ButtonSubmit>
      </Form>
    </Container>
  );
};

export default CreatePoint;
