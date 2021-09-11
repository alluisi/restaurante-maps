import React from 'react';

import { Restaurant, RestaurantInfo, Title, Address } from './styles';

const ResturantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Nome do Restaurante</Title>
      <p>Avaliação</p>
      <Address>Avenida São Carlos, 1500</Address>
    </RestaurantInfo>
  </Restaurant>
);

export default ResturantCard;
