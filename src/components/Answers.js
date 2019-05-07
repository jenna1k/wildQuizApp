import React from 'react';
import { Card, Button, Row, Col } from 'reactstrap';

const Answers = ({correct_answer, incorrect_answers})=> {
  let list = [];
  let data = incorrect_answers;
  for (let i = 0; i < data.length; i++){
    list.push(
      <Col lg="6" sm="12">
      <Button className="m-1" color="info" size="lg" key={i} block onClick={clickButton}>{data[i]}</Button>
      </Col>
    )
  }

  const clickButton = (e) => {
    console.log(e);
    e.preventDefault();
  }

  return(
    <Card className="border-0 bg-light">
      <Row>
        {list}
        <Col lg="6" sm="12">
        <Button className="m-1" color="info" size="lg" block onClick={clickButton}>{correct_answer}</Button>
        </Col>
      </Row>
    </Card>
  )
}

export default Answers;