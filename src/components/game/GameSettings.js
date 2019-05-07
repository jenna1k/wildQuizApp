import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import SelectCategory from './SelectCategory';
import NumberOfQuestions from './NumberOfQuestions';
import SelectDifficulty from './SelectDifficulty';
import './GameSettings.css';


export default class GameSettings extends React.Component {
  constructor(props) {
    super(props);

    this.setCategoryHandler = this.setCategoryHandler.bind(this);
    this.setAmountHandler = this.setAmountHandler.bind(this);
    this.setDifficultyHandler = this.setDifficultyHandler.bind(this);

    this.state = {
      difficulty: "",
      category: "any", // API call: <url> + (this.state.category == "any" ? "" : ("&category=" + this.state.category))
      amount: 10
    };
  }

  setCategoryHandler(category) {
    this.setState({
      category: category
    })
  }

  setAmountHandler(amount) {
    this.setState({
      amount: amount
    })
  }

  setDifficultyHandler(difficulty) {
    this.setState({
      difficulty: difficulty
    })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="4">
            <SelectCategory setCategoryHandler={this.setCategoryHandler} />
          </Col>
          <Col md="4">
            <NumberOfQuestions setAmountHandler={this.setAmountHandler} />
          </Col>
          <Col md="4">
            <SelectDifficulty setDifficultyHandler={this.setDifficultyHandler} />
          </Col>
        </Row>
      </Container>
    )
  }
}