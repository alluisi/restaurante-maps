import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';

import { Container, Search, Logo, Wrapper, Map } from './styles';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt='logo do restaurante' />
                    <TextField
                        label="Pesquisar Restaurante"
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search" />}>
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </TextField>
                </Search >
            </Container >
            <Map />
        </Wrapper>
    )
};

export default Home;
