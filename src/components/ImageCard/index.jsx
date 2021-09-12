import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Skeleton from '../Skeleton';

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

const ImageCard = ({ photo, title }) => {
  const [imageLoaded, setImagedLoaded] = useState(false);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = photo;
    imageLoader.onload = () => setImagedLoaded(true);
  }, [photo]);

  return (
    <>
      {imageLoaded ? (
        <Card photo={photo}>
          <Title>{title}</Title>
        </Card>
      ) : <Skeleton width='90px' height='90px' />}
    </>
  )
};

export default ImageCard;