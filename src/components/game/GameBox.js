import React from 'react';
import {
  Jumbotron, Button, CardTitle, CardText, CardBody,
  CardHeader, CardFooter, Row, Col
} from 'reactstrap';
import Question from './Question';
import Answers from './Answers';
import ProgressBar from './ProgressBar';

const GameBox = ({ quiz, score, clickButton, answered, nextButton }) => {
  console.log('GameBox.js rendered')  
  // FOR DECODING
  const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

  const nextQuestionButton = [];
  if(answered){
    nextQuestionButton.push(
      <Button color="danger" onClick={(e) => {
        e.preventDefault();
        nextButton(e);
        }} >Next</Button>
      )
  }

  console.log('<GameBox>quiz=quizList[currentQuiz] : ', quiz)


  return (
    <Jumbotron fluid>
      <Row className="d-flex justify-content-center">
        <Col sm="6">
          <CardHeader tag="h3" className="bg-dark">
            <CardTitle className="text-white d-flex justify-content-center">Solve quizes from 6 categories!</CardTitle>
          </CardHeader>
          <ProgressBar />
          <CardBody className="bg-light">
            <CardText>
              <Button outline color="info" className="m-1 d-inline" disabled>{quiz.category}</Button>
              <Button outline color="info" className="m-1 d-inline" disabled>Difficulty : {quiz.difficulty}</Button>
            </CardText>
            <Question question={renderHTML(quiz.question)} />
            <Answers correct_answer={quiz.correct_answer} incorrect_answers={quiz.incorrect_answers} clickButton={clickButton} answered={answered}/>
          </CardBody>
          <CardFooter className="bg-dark d-flex justify-content-between">
            <Button outline color="success" disabled>Score: {score}</Button>
            {nextQuestionButton}
          </CardFooter>
        </Col>
      </Row>
    </Jumbotron>
  );
}

export default GameBox;
