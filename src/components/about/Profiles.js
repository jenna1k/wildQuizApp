import React from 'react';
import './Profile.css';
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Container,
  Col,
  Row
} from 'reactstrap';

const Profiles = props => {
  return (
    <Container id="profile">
      <Row>
        <Col lg="4">
          <Card body>
            <CardImg
              top
              src="https://ca.slack-edge.com/T6SG2QGG2-UHRJLPC0L-ebab15075c82-512"
              alt="Profile Picture"
              className="rounded-circle"
            />
            <CardBody>
              <CardTitle>Dajung Kim</CardTitle>
              <CardSubtitle><em>former accountant</em></CardSubtitle>
              <CardText className="description">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.This content is a little bit nkjgkjg
                longer vmvvmmmvmnvmmnvmvmn.
              </CardText>
              <CardText className="social">
                <a href="https://github.com/jenna1k" target="_blank" rel="noopener noreferrer" >
                  <i className="fab fa-github" />
                </a>
                <a href="https://twitter.com/JennaDJK" target="_blank" rel="noopener noreferrer" >
                  <i className="fab fa-twitter-square" />
                </a>
                <a href="https://www.linkedin.com/in/kim-jenna-4292b0132/" target="_blank" rel="noopener noreferrer" >
                  <i className="fab fa-linkedin" />
                </a>
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col lg="4">
          <Card body>
            <CardImg
              top
              src="https://ca.slack-edge.com/T6SG2QGG2-UHS6APYKF-859fb9d29181-512"
              alt="Profile Picture"
              className="rounded-circle"
            />
            <CardBody>
              <CardTitle>Anastasiya Aliashkevich</CardTitle>
              <CardSubtitle><em>former QA</em></CardSubtitle>
              <CardText className="description">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.This content is a little bit nkjgkjg
                longer vmvvmmmvmnvmmnvmvmn.
              </CardText>
              <CardText className="social">
                <a href="https://github.com/aliashkevich" target="_blank" rel="noopener noreferrer" >
                  <i className="fab fa-github" />
                </a>
                <a href="https://github.com/jenna1k" target="_blank" rel="noopener noreferrer" >
                  <i className="fab fa-twitter-square" />
                </a>
                <a href="https://www.linkedin.com/in/anastasiya-aliashkevich-941091a0/" target="_blank" rel="noopener noreferrer" >
                  <i className="fab fa-linkedin" />
                </a>
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col lg="4">
          <Card body>
            <CardImg
              top
              src="https://ca.slack-edge.com/T6SG2QGG2-UHTT5TD2T-5bf3a1b22743-512"
              alt="Profile Picture"
              className="rounded-circle"
            />
            <CardBody>
              <CardTitle>Bernadetta Nycz</CardTitle>
              <CardSubtitle><em>former stylist</em></CardSubtitle>
              <CardText className="description">
                This card has even longer content than the first to show that
                equal height action.
              </CardText>
              <CardText className="social">
                <a href="https://github.com/jenna1k" target="_blank" rel="noopener noreferrer" >
                  <i className="fab fa-github" />
                </a>
                <a href="https://github.com/jenna1k" target="_blank" rel="noopener noreferrer" >
                  <i className="fab fa-twitter-square"></i>
                </a>
                <a href="https://github.com/jenna1k" target="_blank" rel="noopener noreferrer" >
                  <i className="fab fa-linkedin"></i>
                </a>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profiles;
