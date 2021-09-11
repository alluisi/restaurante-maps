import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map } from '../../components/index';

import { Container, Carousel, Search, Logo, Wrapper, CarouselTitle } from './styles';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState(null);
    const [modalOpend, setModalOpend] = useState(false);
    const { restaurants } = useSelector((state) => state.restaurants);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true
    };

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            setQuery(inputValue);
        }
    }

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="logo do restaurante" />
                    <TextField
                        label="Pesquisar Restaurante"
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search" />}>
                        <Input
                            value={inputValue}
                            onKeyPress={handleKeyPress}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </TextField>
                    <CarouselTitle>Na sua área</CarouselTitle>
                    <Carousel {...settings}>
                        {restaurants.map((restaurant) => (
                            <Card key={restaurant.place_id} photo={restaurant.photos ? restaurant.photo[0].setUrl() : restaurante} />
                        ))}
                    </Carousel>
                </Search >
                {restaurants.map((restaurant) => (
                    <RestaurantCard restaurant={restaurant} />
                ))}
            </Container >
            <Map query={query} />
            {/* <Modal open={modalOpend} onClose={() => setModalOpend(!modalOpend)} /> */}
        </Wrapper>
    )
};

export default Home;
