import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { ILoadingProps } from '../../@types';

import { Container } from './styles';

const Loading: React.FC<ILoadingProps> = ({ color, size }) => {
  return (
    <Container>
      <AiOutlineLoading3Quarters color={color} size={size} />
    </Container>
  );
};

export default Loading;
