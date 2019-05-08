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
    this.setState({
      numOfQuestions: e.currentTarget.value
    });

    if (this.props.setAmountHandler != null) {
      this.props.setAmountHandler(e.currentTarget.value);
    }
  }

  render() {
    return (
      <FormGroup>
        <Label for="numberOfQuestions">Number of questions:</Label>
        <Input id="numberOfQuestions"
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
