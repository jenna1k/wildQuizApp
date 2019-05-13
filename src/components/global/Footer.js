import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <Container id="footer">
        <footer>
          <Row>
            <Col>
              <p className="align-self-center">Wild Code School &copy; 2019</p>
            </Col>
          </Row>
        </footer>
      </Container>
    );
  }
}
