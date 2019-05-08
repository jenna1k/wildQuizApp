import React from 'react';
import { Card, Button, Row, Col } from 'reactstrap';

const Answers = ({correct_answer, incorrect_answers})=> {
  let list = [];
  let data = incorrect_answers;

  const answerList = [].concat(correct_answer).concat(incorrect_answers);
  console.log("array:",answerList);
  for (let i = 0; i < answerList.length; i++){
    list.push(
      <Col lg="6" sm="12">
      <Button className="m-1" color="info" size="lg" key={i} block onClick={clickButton}>{answerList[i]}</Button>
      </Col>
    )
  }

  const clickButton = (e) => {
    console.log('test: ',e.target);
    e.preventDefault();
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
  
  // Used like so
  var arr = [2, 11, 37, 42];
  arr = shuffle(arr);
  console.log(arr);

  return(
    <Card className="border-0 bg-light">
      <Row>
        {shuffle(list)}
        {/* Correct: {correct_answer} */}
      </Row>
    </Card>
  )
}

export default Answers;