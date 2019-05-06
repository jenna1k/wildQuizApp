import React from 'react';
import {
  Jumbotron, Card, Button, CardTitle, CardText, CardBody,
  CardHeader, CardFooter, Row, Col, Alert, Progress
} from 'reactstrap';
import './GameBox.css'

export default class GameBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Jumbotron fluid>
        <Row className="d-flex justify-content-center">
          <Col sm="6">
            <CardHeader tag="h3" className="bg-dark">
              <CardTitle className="text-white d-flex justify-content-center">Solve quizes from 6 categories!</CardTitle>
            </CardHeader>
            <Progress multi>
              <Progress bar value="17" />
              <Progress bar color="success" value="17" />
              <Progress bar color="info" value="17" />
              <Progress bar color="warning" value="17" />
              <Progress bar color="secondary" value="17" />
              <Progress bar color="danger" value="17" />
            </Progress>
            <CardBody className="bg-light">
              <CardText>
                <Button outline color="info" className="m-1 d-inline">{this.props.quiz.category}</Button>
                <Button outline color="info" className="m-1 d-inline">Difficulty : {this.props.quiz.difficulty}</Button>
              </CardText>
              <Alert color="info">
                <h2 className="alert-heading d-flex justify-content-center">
                  {this.props.quiz.question}
                </h2>
              </Alert>
              <Card className="border-0 bg-light">
                <Row>
                  <Col lg="6" sm="12">
                    <Button className="m-1" color="info" size="lg" block>{this.props.quiz.incorrect_answers}</Button>
                  </Col>
                  <Col lg="6" sm="12">
                    <Button className="m-1" color="info" size="lg" block>{this.props.quiz.incorrect_answers}</Button>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6" sm="12">
                    <Button className="m-1" color="info" size="lg" block>{this.props.quiz.incorrect_answers}</Button>
                  </Col>
                  <Col lg="6" sm="12">
                    <Button className="m-1" color="info" size="lg" block>{this.props.quiz.correct_answer}</Button>
                  </Col>
                </Row>
              </Card>
            </CardBody>
            <CardFooter className="bg-dark">
              <Button outline color="success">Score: 90</Button>
            </CardFooter>
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}