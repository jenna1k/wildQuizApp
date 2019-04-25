import React from 'react';
import { Jumbotron, Card, Button, CardTitle, CardText, CardBody, 
    CardHeader, CardFooter, Row, Col, Alert } from 'reactstrap';
import './Gamebox.css'

class Gamebox extends React.Component {
  render() {
    return (
    <Jumbotron fluid>
        <Row>
            <Col sm="6">
                <CardHeader tag="h3">
                    <CardTitle>Special Title Treatment</CardTitle>
                </CardHeader>
                <CardBody>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Alert color="success">
                    <h4 className="alert-heading">Well done!</h4>
                    <p>
                    Aww yeah, you successfully read this important alert message. This example text is going
                    to run a bit longer so that you can see how spacing within an alert works with this kind
                    of content.
                    </p>
                    <hr />
                    <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                    </p>
                </Alert>
                <Card>
                    <Row>
                        <Col lg="6" sm="12">
                        <Button color="primary" size="lg" block>Answer</Button>
                        </Col>
                        <Col lg="6" sm="12">
                        <Button color="primary" size="lg" block>Answer</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="6" sm="12">
                        <Button color="primary" size="lg" block>Answer</Button>
                        </Col>
                        <Col lg="6" sm="12">
                        <Button color="primary" size="lg" block>Answer</Button>
                        </Col>
                    </Row>
                </Card>
                </CardBody>
                <CardFooter color="info">
                    <Button outline color="success">Score: 100</Button>
                </CardFooter>
            </Col>
        </Row>
    </Jumbotron>
    );
  }
}


export default Gamebox;
