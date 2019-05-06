import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Carousel from '../components/Carousel';

export default class HowToPlay extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Carousel />
        </Container>
      </div>
    )
  }
}