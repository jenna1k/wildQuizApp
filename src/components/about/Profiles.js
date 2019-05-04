import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Jumbotron
} from 'reactstrap';

const Profiles = (props) => {
  return (
    <Jumbotron>
      <CardDeck>
        <Card>
          <CardImg top src="https://ca.slack-edge.com/T6SG2QGG2-UHRJLPC0L-ebab15075c82-512" alt="Profile Picture" className="rounded-circle img-fluid" />
          <CardBody>
            <CardTitle tag="h1" className="d-flex justify-content-center"><strong>Dajung Kim</strong></CardTitle>
            <CardSubtitle tag="h3" className="d-flex justify-content-center text-muted"><em>former accountant</em></CardSubtitle>
            <CardBody>
              <CardText className="d-flex justify-content-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <Button>Button</Button>
            </CardBody>
          </CardBody>
        </Card>
        <Card>
          <CardImg top src="https://ca.slack-edge.com/T6SG2QGG2-UHS6APYKF-859fb9d29181-512" alt="Profile Picture" className="rounded-circle img-fluid" />
          <CardBody>
            <CardTitle tag="h1" className="d-flex justify-content-center"><strong>Anastasiya Aliashkevich</strong></CardTitle>
            <CardSubtitle tag="h3" className="d-flex justify-content-center text-muted"><em>former QA</em></CardSubtitle>
            <CardBody>
              <CardText className="d-flex justify-content-center">This card has supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </CardBody>
        </Card>
        <Card>
          <CardImg top src="https://ca.slack-edge.com/T6SG2QGG2-UHTT5TD2T-5bf3a1b22743-512" alt="Profile Picture" className="rounded-circle img-fluid" />
          <CardBody>
            <CardTitle tag="h1" className="d-flex justify-content-center"><strong>Bernadetta Nycz</strong></CardTitle>
            <CardSubtitle tag="h3" className="d-flex justify-content-center text-muted"><em>former stylist</em></CardSubtitle>
            <CardBody>
              <CardText className="d-flex justify-content-center">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
              <Button>Button</Button>
            </CardBody>
          </CardBody>
        </Card>
      </CardDeck>
    </Jumbotron>
  );
};

export default Profiles;