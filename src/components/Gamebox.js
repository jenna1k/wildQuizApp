import React from 'react';
import { Jumbotron, Card, Button, CardTitle, CardText, CardBody,
		CardHeader, CardFooter, Row, Col } from 'reactstrap';
import './Gamebox.css'
import Question from '../components/Question';
import Answers from '../components/Answers';
import ProgressBar from '../components/ProgressBar';

const Gamebox = ({ quiz }) => {
  return(
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
								<Question question={quiz.question}/>
								<Answers correct_answer={quiz.correct_answer} incorrect_answers={quiz.incorrect_answers}/>
								</CardBody>
								<CardFooter className="bg-dark">
										<Button outline color="success" disabled>Score: 90</Button>
								</CardFooter>
						</Col>
				</Row>
		</Jumbotron>
);
}


export default Gamebox;
