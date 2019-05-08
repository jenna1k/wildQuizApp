import React from 'react';
import { Card, Button, Row, Col } from 'reactstrap';

const Answers = ({correct_answer, incorrect_answers, clickButton})=> {
  let list = [];

  const answerList = [].concat(correct_answer).concat(incorrect_answers);
  console.log("array:",answerList);
  for (let i = 0; i < answerList.length; i++){
    list.push(
      <Col lg="6" sm="12">
      <Button className="m-1" color="info" size="lg" key={i} block onClick={(e) => clickButton(e,i)}>{answerList[i]}</Button>
      </Col>
    )
    console.log("array2:",answerList); 
  }


  const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }


  return(
    <Card className="border-0 bg-light">
      <Row>
        {shuffle(list)}
        Correct: {correct_answer}

      </Row>
    </Card>
  )
}

export default Answers;