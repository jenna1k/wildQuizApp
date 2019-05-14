import React from 'react';
import './Profile.css';
import {Container, Row, Col} from 'reactstrap';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Jumbotron,
} from 'reactstrap';

const Profiles = props => {
  return (
    <Jumbotron id='profile'>
      <Container>
        <Row>
          <Col xs='12' sm='4' md='4' lg='4'>
            <Card>
              <CardImg
                top
                src='https://ca.slack-edge.com/T6SG2QGG2-UHRJLPC0L-ebab15075c82-512'
                alt='Profile Picture'
                className='rounded-circle'
              />

              <CardBody>
                <CardTitle tag='h2'>
                  <strong>Dajung Kim</strong>
                </CardTitle>
                <CardSubtitle tag='h4'>
                  <em>former accountant</em>
                </CardSubtitle>

                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.This content is a little bit
                  nkjgkjg longer vmvvmmmvmnvmmnvmvmn.
                </CardText>
                <CardText className='social'>
                  <a href='https://github.com/jenna1k'>
                    <i class='fab fa-github' />
                  </a>
                  <a href='https://github.com/jenna1k'>
                    <i class='fab fa-github' />
                  </a>
                  <a href='https://github.com/jenna1k'>
                    <i class='fab fa-github' />
                  </a>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs='12' sm='4' md='4' lg='4'>
            <Card>
              <CardImg
                top
                src='https://ca.slack-edge.com/T6SG2QGG2-UHS6APYKF-859fb9d29181-512'
                alt='Profile Picture'
                className='rounded-circle'
              />
              <CardBody>
                <CardTitle tag='h2'>
                  <strong>Anastasiya Aliashkevich</strong>
                </CardTitle>
                <CardSubtitle tag='h4'>
                  <em>former QA</em>
                </CardSubtitle>

                <CardText>
                  This card has supporting text below as a natural lead-in to
                  additional content.n,vgjkgkgkjgkjgkjgkjgkgkjgkjgkjgkjggkjgjgj.
                </CardText>
                <CardText className='social'>
                  <a href='https://github.com/jenna1k'>
                    <i class='fab fa-github' />
                    <a href='https://github.com/jenna1k'>
                      <i class='fab fa-github' />
                    </a>
                    <a href='https://github.com/jenna1k'>
                      <i class='fab fa-github' />
                    </a>
                  </a>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs='12' sm='4' md='4' lg='4'>
            <Card>
              <CardImg
                top
                src='https://ca.slack-edge.com/T6SG2QGG2-UHTT5TD2T-5bf3a1b22743-512'
                alt='Profile Picture'
                className='rounded-circle'
              />
              <CardBody>
                <CardTitle tag='h2'>
                  <strong>Bernadetta Nycz</strong>
                </CardTitle>
                <CardSubtitle tag='h4'>
                  <em>former stylist</em>
                </CardSubtitle>

                <CardText>
                  {' '}
                  This card has even longer content than the first to show that
                  equal height action.
                </CardText>
                <CardText className='social'>
                  <a href='https://github.com/jenna1k'>
                    <i class='fab fa-github' />
                    <a href='https://github.com/jenna1k'>
                      <i class='fab fa-twitter-square' />
                    </a>
                    <a href='https://github.com/jenna1k'>
                      <i class='fab fa-linkedin' />
                    </a>
                  </a>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Profiles;
