import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Footer extends React.Component {
  render() {
    return (
      <Container>
        <footer>
          <Row>
            <Col sm="12" md="12" lg="12">
              <p className="align-self-center">Wild Code School &copy; 2019</p>
            </Col>
          </Row>
        </footer>
      </Container>
    );
  }
}
