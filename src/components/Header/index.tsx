import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Container, Top, Logo, Title } from './style';
import logo from '../../assets/Nubank_Logo.png';
import Translate from './repository/repository';

export default function Header({ translateY }: Translate) {
    return (
        <Container>
            <Top>
                <Logo source={logo} />
                <Title>AnaBank</Title>
            </Top>

            <MaterialIcons name="keyboard-arrow-down" size={20} color="#fff" />
        </Container>
    );
}