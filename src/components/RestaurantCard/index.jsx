import React from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurante from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';

const ResturantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Nome do Restaurante</Title>
      <ReactStars count={5} isHalf value={4} edit={false} activeColor="#E7711C" />
      <Address>Avenida São Carlos, 1500</Address>
    </RestaurantInfo>
    <RestaurantPhoto src={restaurante} alt="Foto do restaurante" />
  </Restaurant>
);

export default ResturantCard;
