import React, { useContext, useState, useEffect } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { FiArrowLeft } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { Items } from '../../@types';

import Loading from '../../components/Loading';

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
  const [items, setItems] = useState<Items[]>([]);
  const [loading, setLoading] = useState(false);
  const { colors } = useContext(ThemeContext);

  useEffect(() => {
    setLoading(true);

    api
      .get('items')
      .then((response) => {
        setItems(response.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message ?? 'Erro ao listar items!');
        setLoading(false);
      });
  }, []);

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

          {loading ? (
            <Loading size={40} color={colors.primaryColor} />
          ) : (
            <ItemsList>
              {items.map((item) => (
                <Item key={item.id.toString()}>
                  <img src={item.image_url} alt={item.title} />
                  <span>{item.title}</span>
                </Item>
              ))}
            </ItemsList>
          )}
        </fieldset>

        <ButtonSubmit type="submit">Cadastrar ponto de coleta</ButtonSubmit>
      </Form>
    </Container>
  );
};

export default CreatePoint;
