import React from 'react';
import { Card, Button, Row, Col } from 'reactstrap';

export default class Answers extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate : if answered is true, do not update', nextProps, nextState)
    if (nextProps.answered) {  // if already answered, don't update
      return false;
    }
    return true;
  }


  render() {
    console.log('Answers.js rendered')
    // DESTRUCTURING

    const { correct_answer, incorrect_answers, clickButton } = this.props;

    // FOR SHUFFLE BUTTONS

    let list = [];

    const answerList = [].concat(correct_answer).concat(incorrect_answers);
    for (let i = 0; i < answerList.length; i++) {
      if (i === 0) {  // correct_answer
        list.push(
          <Col key={i} lg="6" sm="12">
            <Button className="m-1" color="info" size="lg" block id="ans" key={i} data-answer="correct"
              onClick={(e) => {
                e.preventDefault();
                clickButton(e, i);
              }}
              dangerouslySetInnerHTML={{ __html: answerList[i] }}></Button>
          </Col>
        )
      } else {  // incorrect_answers
        list.push(
          <Col key={i} lg="6" sm="12">
            <Button className="m-1" color="info" size="lg" block id="ans" key={i} data-answer="incorrect"
              onClick={(e) => {
                e.preventDefault();
                clickButton(e, i);
              }}
              dangerouslySetInnerHTML={{ __html: answerList[i] }}></Button>
          </Col>
        )
      }
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

    return (
      <Card className="border-0 bg-light">
        <Row>
          {shuffle(list)}
          Correct: {correct_answer}
        </Row>
      </Card>
    )
  }
}