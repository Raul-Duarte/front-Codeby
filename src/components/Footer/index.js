import React from 'react';

import { Container } from './styles';

import { Image } from 'react-bootstrap';

import Graficos from '../../assets/graficos.png'

function Footer() {
  return (
    <Container>
      <img src={Graficos} />
    </Container>
  )
}

export default Footer;