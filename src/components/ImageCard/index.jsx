import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  justufy-content: center;
  padding: 5px;
  min-width: 90px;
  height: 90px;
  border-radius: 8px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #FFFFFF;
  font-size: 16px;
`;

const ImageCard = ({ photo, title }) => (
  <Card photo={photo}>
    <Title>{title}</Title>
  </Card>
);

export default ImageCard;