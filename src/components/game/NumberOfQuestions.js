import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, FormText } from 'reactstrap';

export default class NumberOfQuestions extends React.Component {
  static defaultProps = {
    setAmountHandler: null,
    defaultNumber: 10
  }

  static propTypes = {
    setAmountHandler: PropTypes.func,
    defaultNumber: PropTypes.number
  }

  constructor(props) {
    super(props);

    this.setNumberOfQuestionsHandler = this.setNumberOfQuestionsHandler.bind(this);
    this.state = {
      numOfQuestions: 10
    };
  }

  setNumberOfQuestionsHandler(e) {
    let filteredValue = e.currentTarget.value;

    // limit max number of question to 50, min to 1
    if (filteredValue !== "") {
      filteredValue = filteredValue > 50 ? 50 : filteredValue;
      filteredValue = filteredValue < 1 ? 1 : filteredValue;
    }

    this.setState({
      numOfQuestions: filteredValue
    });

    if (this.props.setAmountHandler != null) {
      this.props.setAmountHandler(filteredValue);
    }
  }

  render() {
    return (
      <FormGroup>
        <Label for="number-of-questions">Number of questions:</Label>
        <Input id="number-of-questions"
          type="number"
          value={this.state.numOfQuestions}
          maxLength={2}
          min={1}
          max={50}
          onChange={this.setNumberOfQuestionsHandler} />
        <FormText>Specify number of questions (no more than 50).</FormText>
      </FormGroup>
    );
  }
}
